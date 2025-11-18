// src/app.d.ts

// See https://kit.svelte.dev/docs/types#app for more info
declare global {
  namespace App {
    interface Locals {
      user: {
        id: string;
        email?: string | null;
      } | null;
    }

    // You can add more here later if you need:
    // interface PageData {}
    // interface Error {}
    // interface Platform {}
  }
}

export {};

