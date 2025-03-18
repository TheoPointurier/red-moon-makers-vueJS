declare module 'amplitudejs' {
  export interface Song {
    name: string;
    artist: string;
    url: string;
    cover_art_url?: string;
    visualization?: string;
  }

  export interface Config {
    songs: Song[];
    [key: string]: any;
  }

  export function init(config: Config): void;
  export function play(): void;
  export function pause(): void;
  export function playSongAtIndex(index: number): void;
  export function next(): void;
  export function prev(): void;
  export function setVolume(volume: number): void;

  export function getActiveIndex(): number {
    throw new Error('Function not implemented.');
  }

  export function getAudio(): HTMLMediaElement {
    throw new Error('Function not implemented.');
  }
}
