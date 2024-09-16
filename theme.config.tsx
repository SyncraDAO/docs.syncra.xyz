import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    return (
      <>
        <meta property="og:url" content={"https://docs.syncra.xyz"} />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <meta property="og:title" content={`Documentation | Syncra`} />
        <meta
          property="og:description"
          content={"Syncra is a next-generation DAO platform. Build your company with world-leading, no-code solution on Syncra."}
        />
      </>
    )
  },
  logo: 
    <svg width="142" height="30" viewBox="0 0 142 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.442871" y="10.0361" width="14" height="8" rx="4" transform="rotate(-30 0.442871 10.0361)" fill="#FAF5FF"/>
      <rect y="20.0361" width="16" height="8" rx="4" transform="rotate(-30 0 20.0361)" fill="#FAF5FF"/>
      <path d="M30.3764 23.24C35.8004 23.24 37.9124 20.792 37.9124 18.032C37.9124 15.968 36.8564 13.952 32.9204 13.376L27.8804 12.632C27.0164 12.512 26.7284 12.272 26.7284 11.768C26.7284 11.072 27.2324 10.76 29.5364 10.76C32.5604 10.76 33.0644 11.144 33.0644 12.296V12.656H37.5764V12.512C37.5764 8.912 35.1284 6.68 30.0164 6.68C24.2084 6.68 22.2164 9.368 22.2164 11.936C22.2164 14.528 23.7284 16.136 26.7284 16.544L31.7684 17.216C33.0884 17.384 33.4004 17.624 33.4004 18.2C33.4004 18.92 33.1124 19.136 30.3764 19.136C27.3524 19.136 26.9684 18.848 26.9684 17.768V17.264H22.4564V17.408C22.4564 21.488 25.4564 23.24 30.3764 23.24ZM52.0387 23V17.912L59.4067 6.92H53.7907L51.3667 10.736L49.9987 12.992H49.6867L48.3187 10.736L45.8947 6.92H40.3027L47.5267 17.888V23H52.0387ZM66.6697 23V16.712L66.4777 13.64H66.7897L68.8297 16.808L73.5817 23H78.3817V6.92H73.8697V13.136L74.0857 16.64H73.7737L71.4217 12.944L66.9577 6.92H62.1577V23H66.6697ZM90.8696 23.24C96.2696 23.24 99.5096 20.672 99.5096 16.376V15.968H94.4696V16.376C94.4696 18.2 93.6056 18.92 90.9416 18.92C87.6776 18.92 86.7896 18.152 86.7896 14.96C86.7896 11.768 87.6776 11 90.9416 11C93.6056 11 94.4696 11.72 94.4696 13.544V13.952H99.5096V13.544C99.5096 9.248 96.2696 6.68 90.8696 6.68C85.2776 6.68 81.9896 9.944 81.9896 14.96C81.9896 19.976 85.2776 23.24 90.8696 23.24ZM107.61 23V17.528H109.458C111.21 17.528 111.69 17.864 112.266 19.064L114.186 23H119.394L117.402 18.968C116.802 17.744 116.274 16.952 114.618 16.52V16.28C117.69 15.896 118.962 14.384 118.962 11.84C118.962 8.696 116.73 6.92 112.482 6.92H103.098V23H107.61ZM107.61 10.976H112.434C113.754 10.976 114.234 11.288 114.234 12.56C114.234 13.928 113.754 14.168 112.434 14.168H107.61V10.976ZM126.618 23L127.866 20.024H135.498L136.722 23H141.906L134.946 6.92H128.49L121.554 23H126.618ZM130.506 13.712L131.538 11H131.85L132.906 13.712L133.842 15.968H129.57L130.506 13.712Z" fill="#FAF5FF"/>
    </svg>,
  project: {
    link: 'https://github.com/SyncraDAO',
  },
  chat: {
    link: 'https://discord.gg/bhVFa3BxbG',
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://testnet.syncra.xyz" target="_blank">
        🎉 Syncra Beta Testnet Application is released. Check it out →
      </a>
    )
  },
  docsRepositoryBase: 'https://github.com/SyncraDAO/docs.syncra.xyz/blob/main/',
  footer: {
    text: 'Syncra is a next-generation DAO platform. Build your company with world-leading, no-code solution on Syncra.',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ fontWeight: 'bold' }}>{title}</div>
        )
      }

      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1
  },
  primaryHue: 270,
  primarySaturation: 100,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Syncra'
    }
  }
}

export default config
