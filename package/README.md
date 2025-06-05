# @suno/api

A modern TypeScript Node.js package for interacting with the Suno API. This package provides a comprehensive interface for generating music, lyrics, and managing audio content through Suno's services.

## Features

- 🎵 Generate music from text prompts
- 🎼 Custom music generation with tags and titles
- 📝 Lyrics generation
- 🔄 Audio extension and concatenation
- 🎚️ Stem generation for tracks
- 📊 Credit management
- 🤖 CAPTCHA handling
- 💾 Instance caching for performance

## Installation

```bash
npm install @suno/api
```

## Usage

### Basic Setup

```typescript
import { sunoApi, SunoApi } from '@suno/api';

// Using the factory function (recommended)
const api = await sunoApi('your-cookie-string');

// Or create a new instance directly
const api = new SunoApi('your-cookie-string');
await api.init();
```

### Generate Music

```typescript
// Simple generation
const songs = await api.generate('A cheerful pop song about summer');

// Custom generation with parameters
const customSongs = await api.custom_generate(
  'Verse 1: Walking down the sunny street...',
  'pop, upbeat, summer',
  'Summer Vibes',
  false, // not instrumental
  'chirp-v3-5', // model
  true // wait for completion
);
```

### Generate Lyrics

```typescript
const lyrics = await api.generateLyrics('A song about friendship and adventure');
console.log(lyrics);
```

### Extend Audio

```typescript
const extendedAudio = await api.extendAudio(
  'audio-id-here',
  'Continue with a guitar solo',
  30, // continue at 30 seconds
  'rock, guitar',
  '', // no negative tags
  'Extended Version'
);
```

### Get Audio Information

```typescript
// Get specific songs
const audioInfo = await api.get(['song-id-1', 'song-id-2']);

// Get audio with pagination
const audioList = await api.get(undefined, '1');
```

### Check Credits

```typescript
const credits = await api.get_credits();
console.log(`Credits left: ${credits.credits_left}`);
```

## Environment Variables

The package supports the following environment variables:

- `SUNO_COOKIE`: Default cookie for authentication
- `TWOCAPTCHA_KEY`: API key for 2captcha service (for CAPTCHA solving)
- `BROWSER_HEADLESS`: Run browser in headless mode (default: true)
- `BROWSER_GHOST_CURSOR`: Enable ghost cursor for more human-like interactions
- `BROWSER_LOCALE`: Browser locale setting
- `BROWSER_DISABLE_GPU`: Disable GPU acceleration
- `BROWSER`: Browser type (chromium, firefox)

## API Reference

### Main Classes

#### `SunoApi`

The main class for interacting with the Suno API.

#### Methods

- `generate(prompt, instrumental?, model?, waitAudio?)` - Generate music from prompt
- `custom_generate(prompt, tags, title, instrumental?, model?, waitAudio?, negativeTags?)` - Custom music generation
- `generateLyrics(prompt)` - Generate lyrics
- `extendAudio(audioId, prompt, continueAt, tags?, negativeTags?, title?, model?, waitAudio?)` - Extend existing audio
- `concatenate(clipId)` - Concatenate audio clips
- `generateStems(songId)` - Generate stems for a song
- `get(songIds?, page?)` - Get audio information
- `getClip(clipId)` - Get specific clip information
- `get_credits()` - Get credit information
- `projects(page?)` - Get user projects
- `getProject(projectId, hideDisliked?, page?, query?)` - Get specific project
- `getClipComments(clipId, order?)` - Get clip comments

### Types

#### `AudioInfo`

```typescript
interface AudioInfo {
  id: string;
  title?: string;
  image_url?: string;
  lyric?: string;
  audio_url?: string;
  video_url?: string;
  created_at: string;
  model_name: string;
  gpt_description_prompt?: string;
  prompt?: string;
  status: string;
  type?: string;
  tags?: string;
  negative_tags?: string;
  duration?: string;
  error_message?: string;
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 