"use client";

const DiscordInvite = () => {
  return (
    <section className="body-font text-gray-200 bg-indigo-900">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-6 flex w-full flex-col pr-0 text-center md:mb-0 md:w-auto md:pr-10 md:text-left">
          <h2 className="font-body text-1xl mb-1 font-medium tracking-widest text-indigo-200">STEP INTO THE GREAT BEYOND</h2>
          <h1 className="font-header text-2xl font-medium text-white md:text-4xl ">The best way to get started is Discord</h1>
        </div>
        <div className="mx-auto flex flex-shrink-0 items-center space-x-4 md:ml-auto md:mr-0">
          <a
            href="https://discord.gg/MXmcyScFEZ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-[#7289da] px-5 py-3 hover:bg-[#677dcd] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24">
              <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
            </svg>
            <span className="ml-4 flex flex-col items-start leading-none">
              <span className="font-body text-xs text-gray-100">JOIN THE GREAT BEYOND ON</span>
              <span className="font-body title-font text-2xl font-medium">Discord</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscordInvite;
