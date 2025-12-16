import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

// Direct logo URLs from Wikipedia Commons and official sources
const partnerLogos = {
  'ESPN': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/ESPN_wordmark.svg',
  'NFL': 'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg',
  'Duke University': 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Duke_Athletics_logo.svg',
  'Northwestern University': 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Northwestern_Wildcats_logo.svg',
  'University of Southern California': 'https://upload.wikimedia.org/wikipedia/commons/9/94/USC_Trojans_logo.svg',
  'New York University': 'https://upload.wikimedia.org/wikipedia/en/1/1b/New_York_University_Seal.svg',
  'University of Maryland': 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Maryland_Terrapins_logo.svg',
  'Drexel University': 'https://upload.wikimedia.org/wikipedia/en/6/61/Drexel_University_seal.svg',
  'Tulane University': 'https://upload.wikimedia.org/wikipedia/en/8/8f/Tulane_Green_Wave_logo.svg',
  'University of California Berkeley': 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg',
  'Chicago Cubs': 'https://upload.wikimedia.org/wikipedia/commons/8/80/Chicago_Cubs_logo.svg',
  'Chicago Sky': 'https://upload.wikimedia.org/wikipedia/en/d/d6/Chicago_Sky.svg',
  'Big Ten Conference': 'https://upload.wikimedia.org/wikipedia/commons/4/44/Big_Ten_Conference_logo.svg',
  'Comcast': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Comcast_Logo_2024.svg',
  'YMCA': 'https://upload.wikimedia.org/wikipedia/commons/1/12/YMCA_logo.svg',
  'Boys and Girls Club': 'https://upload.wikimedia.org/wikipedia/en/5/55/Boys_%26_Girls_Clubs_of_America_logo.svg',
  'University of Illinois Chicago': 'https://upload.wikimedia.org/wikipedia/en/1/13/University_of_Illinois_Chicago_circle_logo.svg',
  'Chicago Public Schools': 'https://upload.wikimedia.org/wikipedia/en/6/65/Chicago_Public_Schools_logo.svg',
};

const outputDir = path.join(process.cwd(), 'static', 'images', 'partners');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    };

    const request = protocol.get(url, options, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(filepath);
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });

    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function main() {
  console.log('Fetching partner logos from Wikipedia Commons...\n');

  const results = [];

  for (const [partner, url] of Object.entries(partnerLogos)) {
    const ext = url.includes('.svg') ? 'svg' : 'png';
    const filename = partner.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '') + '.' + ext;
    const filepath = path.join(outputDir, filename);

    try {
      await downloadFile(url, filepath);
      console.log(`✓ ${partner} -> ${filename}`);
      results.push({ partner, filename, success: true });
    } catch (err) {
      console.log(`✗ ${partner} (${err.message})`);
      results.push({ partner, filename: null, success: false });
    }

    await new Promise(r => setTimeout(r, 300));
  }

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`\n--- Summary ---`);
  console.log(`Success: ${successful.length}`);
  console.log(`Failed: ${failed.length}`);

  // Generate partners data with logos
  const partnersWithLogos = successful.map(r => ({
    name: r.partner,
    logo: `/images/partners/${r.filename}`
  }));

  console.log('\nPartners with logos for code:');
  console.log(JSON.stringify(partnersWithLogos, null, 2));
}

main();
