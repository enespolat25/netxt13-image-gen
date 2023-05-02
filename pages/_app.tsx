import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <h2>Create Images With Your Mind</h2>
  <textarea 
  className="app-input"
  placeholder="Create any type of image you can think of with as much added description as you would like"/>
  <button>Generate Image</button>
  </>
}
