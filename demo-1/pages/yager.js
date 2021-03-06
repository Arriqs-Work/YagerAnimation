import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import gsap from 'gsap'
const YagerLogo = () => {
    return (
      <>
        <div className="Container" onMouseEnter={()=>{gsap.to(".tan", {rotation: -32, x: -100, y: -100, duration: 1}); gsap.to(".blue", {rotation: 32, x: 100, y: 100, duration: 1}); gsap.to(".Yager", { scaleX: 20, scaleY: 20, duration: 1});}} onMouseLeave={()=>{gsap.to(".tan", {rotation: 0, x: 0, y: 0, duration: 1}); gsap.to(".blue", {rotation: 0, x: 18, y: -122, duration: 1}); gsap.to(".Yager", { scaleX: 0, scaleY: 0, duration: 1});}}>
          <svg className="tan"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.68 389" width="150px" height="150px"><defs></defs><g id="Layer_2" dataName="Layer 2" fill="#AC9D71"><g id="Yager_Logo" dataName="Yager Logo"><path id="Tan" class="cls1" d="M510.68,141c-13-22.92-50.38-81.51-125-116a274.24,274.24,0,0,0-115-25c-11.14,0-112.1,1.8-188,73-79.35,74.44-104.29,199.42-63,316l111.47-83.18,135.29,41.89,88.24-112Z"/></g></g></svg>
          <svg className="blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 677.59 423.47" width="200px" height="200px"><defs></defs><g id="Layer_2" dataName="Layer 2" fill="#143b68"><g id="Yager_Logo" dataName="Yager Logo"><path id="Blue" class="cls2" d="M82.18,308.24c13.56,18.92,62,81.53,151.76,105.88,105.24,28.54,189.59-16.56,205.41-25.41,75.38-42.17,107.48-107,116.47-127.06C591.16,183,579,115.08,573.89,92.4l28.52-19.93,28.24,39.06L677.59,0H554.41l26.35,40L409.47,144,318.18,261.06,179.35,216.94,0,358.41Z"/></g></g></svg>
          <svg className="Yager" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.3 87.73"><defs></defs><g id="Layer_2" dataName="Layer 2"><g id="Text"><path fill="#143b68" d="M31.31,42.8c0,7.48.48,8.12,4.06,8.61l3.19.4a2.58,2.58,0,0,1,0,2.82c-5.18-.17-9.08-.25-12.91-.25s-7.81.08-12.51.25a2.34,2.34,0,0,1,0-2.82l2.71-.4c3.59-.57,4.07-1.13,4.07-8.61v-4c0-4-.08-5.31-2.16-9.58L8.28,9.41C6.69,6.11,6,4.83,3.19,4.34L.48,3.86C-.24,3.22-.16,1.29.8,1.05c3.58.16,6.53.24,11.23.24,4.86,0,8.92-.08,11.63-.24.72.32.88,2.17.16,2.81l-2.71.65c-1.43.32-1.91.64-1.91.72,0,.64.4,1.85,2.07,5.63L25,19.47c1.19,2.65,3,6.35,4,8.37,2.31-3.95,4.78-9.18,6.85-13.28,2.87-5.71,3.82-8.12,3.82-9.09,0-.48-1.27-1-3.18-1.29L35,3.86c-.63-.4-.71-2.41.08-2.81,3.19.16,6.06.24,8.93.24,3,0,5.49-.08,7.8-.24,1,.32,1,2.25.32,2.81L50,4.26c-1.43.25-3.27.81-4.14,1.94-1.2,1.52-3.11,4.42-6.93,11.42l-5,9.17a17.74,17.74,0,0,0-2.63,10.38Z"/><path fill="#143b68" d="M61.44,36.54c-1.91,0-2.15.08-2.63,1.61L55.7,47.48a9.47,9.47,0,0,0-.56,2.9c0,.48,1,1,3.27,1.37l2.39.4c.48.56.64,2.41-.16,2.81-2.79-.16-5.66-.16-9-.24-2.71,0-4.54.24-8.21.24-.87-.48-.79-2.17-.24-2.81l2.15-.24c1.92-.24,3.51-.89,4.86-4s2.87-7.07,5-12.87l7.25-19.63c1.84-5.06,3.19-7.88,3-10.21C69.25,4.28,72.19.34,72.35.34c1,0,1.52.4,1.83,1.61.64,2.33,1.6,5.31,3.59,11L88.61,44.51c1.67,4.82,2.39,6.67,5.33,7.16l3,.48c.48.4.64,2.33-.08,2.81-3.82-.16-8.13-.24-12.27-.24-4,0-7.09.08-10.75.24a1.83,1.83,0,0,1-.16-2.81l2.55-.4c1.83-.33,2.15-.89,2.15-1.37a34,34,0,0,0-1.52-5.47L74.74,38c-.4-1.29-1-1.45-3.82-1.45Zm9.08-4.26c1.83,0,2.23-.24,1.59-2.33L70,23.43c-1.11-3.46-2.55-7.8-3.26-9.49-.64,1.85-2.23,6.19-3.43,9.89l-2,6C60.64,32,61,32.28,63,32.28Z"/><path fill="#143b68" d="M138,45.29c0,3.38.16,5,1.67,5.31.32.32.24,1.69-.23,1.93a35.6,35.6,0,0,0-5.58,1.21,60.73,60.73,0,0,1-14.1,1.93,39.4,39.4,0,0,1-15.7-2.81c-9.32-3.79-15.69-12.72-15.69-24.3,0-10.06,4.46-18.91,14-24.3A38.7,38.7,0,0,1,121,0c8.85,0,13.23,1.93,15.78,1.93.24,2.41.31,8.05,1.11,13-.32.89-2.47,1-3,.16-2.55-7.56-7.56-11.34-15-11.34C107.24,3.7,101.1,14.32,101.1,27c0,11.51,3.91,18.34,9.09,21.88A19.26,19.26,0,0,0,121.1,52c4.54,0,5.5-.88,5.5-6.11V40.79c0-4.35-.48-4.83-4.3-5.39l-3.51-.49a1.84,1.84,0,0,1,0-2.81c5.66.16,9.56.24,13.47.24s7.72-.08,10.43-.24a2.3,2.3,0,0,1,0,2.81l-1.83.33c-2.39.4-2.87,1.2-2.87,5.55Z"/><path fill="#143b68" d="M162.67,22.2c0,2.26.08,2.42,2.23,2.42h5.49c4.15,0,5.1-.57,5.9-4.43l.4-2c.56-.64,2.55-.64,2.95.08-.16,2.58-.24,5.47-.24,8.53s.08,6,.24,8.53c-.4.72-2.39.8-2.95.08l-.4-2c-.8-3.87-1.75-4.51-5.9-4.51H164.9c-2.15,0-2.23.08-2.23,2.5V41c0,3.7.31,6.27,1.27,7.64s2.55,2.09,8.37,2.09c6.93,0,9.64-.24,14-9.33a1.93,1.93,0,0,1,2.95.4,45.92,45.92,0,0,1-3.35,12.88c-4.22-.17-11.87-.25-18.4-.25H157.17c-3.83,0-7.73.08-13.7.25-.64-.49-.64-2.42,0-2.82l3.74-.56c3.59-.57,4.06-1,4.06-8.45v-30c0-7.32-.47-7.8-4.06-8.53l-2-.4a2,2,0,0,1,.16-2.81c3.74.16,7.65.24,11.47.24h16.89c5.1,0,9.64-.08,10.68-.24.08,1.28.63,7.08,1,12.47-.32.88-2.15,1-2.95.32a18.72,18.72,0,0,0-3-6.36C178,6,175.57,5,171.67,5H165.3c-2.63,0-2.63.16-2.63,3.14Z"/><path fill="#143b68" d="M196,14.32c0-8-.16-8.93-3.51-9.41l-2.15-.32c-.8-.41-.8-2.42.16-2.82,6-.4,12.19-.72,19.76-.72,6.77,0,12.59,1,15.61,2.89,4.62,2.74,7,6.76,7,11.91,0,7.16-4.78,10.22-8.44,12.07-.8.4-.8.88-.4,1.77,5.26,10.78,8.53,16.81,12.35,20.11a9.66,9.66,0,0,0,5.34,2.25,1.54,1.54,0,0,1,.32,2.09c-1.28.57-3.83.73-6.3.73-7.33,0-12-2.66-15.45-8.45A100.56,100.56,0,0,1,214.07,34a4,4,0,0,0-4.22-2.82c-2.79,0-2.95.17-2.95,1.77v9.9c0,7.4.48,8,4.06,8.61l2.16.4c.55.4.55,2.33,0,2.82-4.23-.17-7.89-.25-11.71-.25-4,0-7.49.08-11.64.25-.63-.49-.63-2.42,0-2.82l2.15-.4c3.59-.65,4.07-1.21,4.07-8.61ZM206.9,24.54c0,2.81.24,3.05,4.94,3.05,2.87,0,4.54-.72,6.06-2.25,1.35-1.37,2.87-3.94,2.87-8.69,0-7.24-4.23-11.9-10.44-11.9-3.27,0-3.43.24-3.43,4.1Z"/><path fill="#ded8c6" d="M78.9,66.21c2.13,0,3.23-.06,4-.11a.53.53,0,0,1,0,.68L81.71,67c-1.56.25-2.38,1.68-3.26,3.11s-2.1,3.12-3.29,4.78c.49.77.66,1,.94,1.43,1.5,2.32,2.94,2.58,4.11,2.58a3.65,3.65,0,0,0,2.54-1,.38.38,0,0,1,.32.51,5.43,5.43,0,0,1-4.51,1.92,5,5,0,0,1-3-.83,17.81,17.81,0,0,1-1.72-2.63c-1.62,1.83-3.66,3.46-6.18,3.46-4,0-5.55-2.89-5.55-5.15,0-3,2.07-4.72,4.59-6.24a4.37,4.37,0,0,1-2.18-3.46,3.92,3.92,0,0,1,4-3.86A3.4,3.4,0,0,1,72.11,65c0,1.89-1.48,2.63-2.87,3.44A19.31,19.31,0,0,1,74.65,74a39.92,39.92,0,0,0,2.95-5,5.33,5.33,0,0,0,.62-1.58c0-.2-.28-.37-.73-.43l-1-.11a.47.47,0,0,1,.06-.69ZM64.2,74.28a4.08,4.08,0,0,0,4.22,4.32A6.61,6.61,0,0,0,73.3,76a20.33,20.33,0,0,0-5.9-6.47A5.71,5.71,0,0,0,64.2,74.28Zm2.1-9.53c0,1.2.79,2.24,2.32,3.12a3.51,3.51,0,0,0,1.7-3c0-1.26-.62-2.49-2-2.49A2.2,2.2,0,0,0,66.3,64.75Z"/><path fill="#ac9d71" d="M100.89,77.16c-.3-1-.47-1.08-1.75-1.08H92.72c-1.07,0-1.32.13-1.62,1l-1.49,4.51a16.56,16.56,0,0,0-.94,3.57c0,.51.22.77,1.24.86l1.4.13a.69.69,0,0,1-.08,1.07c-1.11-.08-2.43-.08-4.43-.13-1.4,0-2.94.09-4.09.13a.85.85,0,0,1-.08-1.07l1.4-.13A2.84,2.84,0,0,0,86.59,84c.76-2,2-4.77,3.74-9.59l4.34-11.6a6.32,6.32,0,0,0,.73-3.06,4.76,4.76,0,0,0,2.21-1.63.61.61,0,0,1,.64.39c.55,1.89,1.23,3.87,1.87,5.76L106,81.5c1.24,3.7,1.79,4.34,3.62,4.56l1.15.13c.3.21.21.9,0,1.07-1.75-.08-3.24-.13-5.15-.13s-3.66.09-4.9.13a.72.72,0,0,1-.08-1.07l1.23-.13c.9-.09,1.49-.35,1.49-.78a9,9,0,0,0-.55-2.28Zm-8.43-3.83c-.34,1-.3,1,.89,1h5.24c1.23,0,1.32-.17.94-1.33l-2.3-7c-.34-1-.73-2.19-1-2.7h-.09c-.12.21-.55,1.24-1,2.53Z"/><path fill="#ac9d71" d="M120.6,70.37a10.16,10.16,0,0,1,.68,3.48.74.74,0,0,1-1,.13c-.73-1.9-2-3.14-3.75-3.14a2.52,2.52,0,0,0-2.72,2.62c0,1.76,1.78,2.71,3.27,3.57,2.26,1.29,4.34,2.75,4.34,5.8,0,3.27-3,4.9-6.12,4.9a7.06,7.06,0,0,1-4.56-1.29,13,13,0,0,1-.51-4.34.72.72,0,0,1,1,0c.72,2.36,2.09,4.43,4.51,4.43a2.64,2.64,0,0,0,2.85-2.75c0-2-1.7-3.06-3.27-4-2.47-1.42-4.22-2.92-4.22-5.29,0-3.14,2.56-4.9,5.79-4.9A7.42,7.42,0,0,1,120.6,70.37Z"/><path fill="#ac9d71" d="M133.2,70.37a10.16,10.16,0,0,1,.68,3.48.74.74,0,0,1-1,.13c-.73-1.9-2-3.14-3.75-3.14a2.52,2.52,0,0,0-2.72,2.62c0,1.76,1.78,2.71,3.27,3.57,2.26,1.29,4.34,2.75,4.34,5.8,0,3.27-3,4.9-6.12,4.9a7.06,7.06,0,0,1-4.56-1.29,13,13,0,0,1-.51-4.34.72.72,0,0,1,1,0c.72,2.36,2.09,4.43,4.51,4.43a2.64,2.64,0,0,0,2.85-2.75c0-2-1.7-3.06-3.27-4-2.47-1.42-4.22-2.92-4.22-5.29,0-3.14,2.56-4.9,5.79-4.9A7.42,7.42,0,0,1,133.2,70.37Z"/><path fill="#ac9d71" d="M153.33,78.49c0,5.37-3.66,9.24-9,9.24a8.45,8.45,0,0,1-8.73-8.85,9,9,0,0,1,9.07-9.29A8.54,8.54,0,0,1,153.33,78.49Zm-9.15-7.61c-2.81,0-4.9,2.71-4.9,7.44,0,3.91,1.75,8.12,5.49,8.12s4.9-4,4.9-7.26C149.67,75.52,148.22,70.88,144.18,70.88Z"/><path fill="#ac9d71" d="M169.29,70.32a2.45,2.45,0,0,1,.64,1.72c0,.78-.43,1.59-.94,1.59a.72.72,0,0,1-.59-.3,5.8,5.8,0,0,0-4.26-2.28c-3,0-5.87,2.37-5.87,6.93,0,3.35,2.3,7.35,6.85,7.35a5.17,5.17,0,0,0,4.72-2.58.66.66,0,0,1,.77.6,7.75,7.75,0,0,1-7.11,4.38,8.21,8.21,0,0,1-5.83-2.19,8.6,8.6,0,0,1-2.47-6.36c0-4.65,3.24-9.59,10.3-9.59A10.66,10.66,0,0,1,169.29,70.32Z"/><path fill="#ac9d71" d="M173.72,74.79c0-1.67,0-1.89-1.15-2.66l-.38-.26a.59.59,0,0,1,0-.77A29.7,29.7,0,0,0,176.61,69c.22,0,.39.09.43.26-.08,1.5-.17,3.57-.17,5.33v7.74c0,3.09.09,3.52,1.62,3.74l.89.13a.76.76,0,0,1-.08,1.07c-1.28-.08-2.52-.13-4-.13s-2.81.05-4,.13a.76.76,0,0,1-.08-1.07l.89-.13c1.58-.22,1.62-.65,1.62-3.74Zm3.53-12.25a2.21,2.21,0,0,1-4.42.09,2.22,2.22,0,0,1,2.3-2.32A2.13,2.13,0,0,1,177.25,62.54Z"/><path fill="#ac9d71" d="M189.43,78.23c.64-.21.72-.6.72-1.24l0-2c.05-1.59-.47-3.74-3.1-3.74-1.2,0-2.64.6-2.73,1.93,0,.69-.08,1.21-.42,1.47a4.6,4.6,0,0,1-2.43.81.54.54,0,0,1-.6-.6c0-2.24,4.81-5.29,7.92-5.29s4.55,1.81,4.43,5L193,82.1c-.08,2,.3,3.74,2,3.74a2.39,2.39,0,0,0,1.06-.26c.22-.12.43-.3.56-.3s.29.26.29.56a4.44,4.44,0,0,1-3.57,1.89,3.39,3.39,0,0,1-2.77-1.33c-.17-.26-.42-.6-.68-.6a6.56,6.56,0,0,0-1.66.86,6.18,6.18,0,0,1-3.06,1.07,4.38,4.38,0,0,1-3-1,4.06,4.06,0,0,1-1.32-3c0-1.68.81-2.67,3.53-3.66Zm-2.64,7.57a4.82,4.82,0,0,0,2.59-1.07c.51-.52.51-1.12.56-2l.08-2.53c0-.47-.17-.56-.42-.56a7.86,7.86,0,0,0-1.75.43c-2.51.86-3.74,1.5-3.74,3.18A2.58,2.58,0,0,0,186.79,85.8Z"/><path fill="#ac9d71" d="M203.05,72c-.73,0-.77.13-.77,1v8c0,2.49.3,4.77,3.11,4.77a3.22,3.22,0,0,0,1.15-.21c.38-.13.93-.6,1.06-.6.34,0,.51.47.43.73a5.89,5.89,0,0,1-4.47,2c-3.66,0-4.43-2.06-4.43-4.64V73.25c0-1.17,0-1.25-.89-1.25h-1.19a.71.71,0,0,1-.13-.9,8.36,8.36,0,0,0,2.72-1.34,10.42,10.42,0,0,0,1.79-2.53c.21-.09.72-.09.89.21v1.94c0,.77.05.81.77.81h4.72a1.4,1.4,0,0,1,.05,1.81Z"/><path fill="#ac9d71" d="M212.84,76.13c-1.11,0-1.15.08-1.15,1.16,0,4.34,2.51,8,7.06,8a4.57,4.57,0,0,0,3.92-2.11.56.56,0,0,1,.76.52,7.41,7.41,0,0,1-6.68,4,7.62,7.62,0,0,1-6.17-2.83,9.25,9.25,0,0,1-1.79-5.59c0-5.29,3.45-9.72,8.56-9.72,3.66,0,6,2.54,6,5.12a2.65,2.65,0,0,1-.17,1.12c-.13.25-.72.3-2.51.3Zm2.64-1.29c3.14,0,4.08-.17,4.42-.43.13-.09.26-.26.26-.82,0-1.2-.81-2.71-3.28-2.71s-4.68,2.32-4.72,3.74c0,.09,0,.22.29.22Z"/><path fill="#ac9d71" d="M234.67,70.37a9.93,9.93,0,0,1,.68,3.48.74.74,0,0,1-1,.13c-.72-1.9-2-3.14-3.74-3.14a2.53,2.53,0,0,0-2.73,2.62c0,1.76,1.79,2.71,3.28,3.57,2.26,1.29,4.34,2.75,4.34,5.8,0,3.27-3,4.9-6.13,4.9a7,7,0,0,1-4.55-1.29,12.75,12.75,0,0,1-.51-4.34.72.72,0,0,1,1,0c.72,2.36,2.08,4.43,4.51,4.43a2.64,2.64,0,0,0,2.85-2.75c0-2-1.7-3.06-3.28-4-2.46-1.42-4.21-2.92-4.21-5.29,0-3.14,2.55-4.9,5.79-4.9A7.37,7.37,0,0,1,234.67,70.37Z"/></g></g></svg>
        </div>
        <style>
          {`
            .ampersand {
              font-size: 5px;
              top: 0.5px;
            }
            svg {
              z-index: 7
            }
  
            .Yager {
              z-index: 1;
              position: absolute;
              height: 5px
            }
  
            .blue {
              transform: translate(18px, -122px);
            }
  
            .blueOpen {
              transform: translate(30px, -50px)
            }
  
            .Container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </>
    )
  }

  export default function Yager() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <YagerLogo />
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/C1Logo-2019.svg" alt="CreativeOne Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    )
  }