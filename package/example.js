// Example usage of @suno/api package
import { sunoApi, SunoApi } from '@suno/api';

async function main() {
  try {
    // Option 1: Using the factory function (recommended)
    const api = await sunoApi('your-cookie-string-here');
    
    // Option 2: Creating instance directly
    // const api = new SunoApi('your-cookie-string-here');
    // await api.init();
    
    // Generate music
    console.log('Generating music...');
    const songs = await api.generate('A cheerful pop song about summer');
    console.log('Generated songs:', songs);
    
    // Custom generation
    console.log('Custom generation...');
    const customSongs = await api.custom_generate(
      'Verse 1: Walking down the sunny street...',
      'pop, upbeat, summer',
      'Summer Vibes',
      false, // not instrumental
      'chirp-v3-5', // model
      false // don't wait for completion
    );
    console.log('Custom generated songs:', customSongs);
    
    // Check credits
    const credits = await api.get_credits();
    console.log('Credits:', credits);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
} 