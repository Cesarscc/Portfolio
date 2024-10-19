'use client';
import Header from '@/components/Header';
import Image from 'next/image';
import Mail from '@/components/icons/Mail';
import Linkedin from '@/components/icons/Linkedin';
import Maletin from '@/components/icons/Maletin';
import Code from '@/components/icons/Code';
import ReactIcon from '@/components/icons/ReactIcon';
import CssIcon from '@/components/icons/CssIcon';
import NextJsIcon from '@/components/icons/NextJsIcon';
import TailwindIcon from '@/components/icons/TailwindIcon';
import PrismicIcon from '@/components/icons/PrismicIcon';
import FigmaIcon from '@/components/icons/FigmaIcon';
import NetlifyIcon from '@/components/icons/NetlifyIcon';
import DjangoIcon from '@/components/icons/DjangoIcon';
import Preview from '@/components/icons/Preview';
import Redux from '@/components/icons/Redux';
import HtmlIcon from '@/components/icons/HtmlIcon';
import ProfileCheck from '@/components/icons/ProfileCheck';
import TwitterCard from '/public/images/twitterCard.png';
import TicTacToe from '/public/images/TicTacToe.png';
import MouseFollower from '/public/images/MouseFollower.png';
import PruebaTecnica from '/public/images/PruebaTecnica.png';
import BuscadorPeliculas from '/public/images/BuscadorPeliculas.png';
import ShoppingCart from '/public/images/ShoppingCart.png';
import CloneGoogleTranslate from '/public/images/CloneGoogleTranslate.png';
import CrudRedux from '/public/images/CrudRedux.png';
import PruebaTecnicaEmpresa from '/public/images/PruebaTecnicaEmpresa.png';
import ImcetronPage from '/public/images/ImcetronPage.png';
import GifSearch from '/public/images/GifSearch.png';
import BeeFrontend from '/public/images/BeeFrontend.png';
import BatatabitResponsive from '/public/images/BatatabitResponsive.png';
import CrudDjango from '/public/images/nextjs-djangorest.png';
import PasarelaStripe from '/public/images/PasarelaStripe.png';
import ExamSimulator from '/public/images/ExamSimulator.png';
import EditCasePhone from '/public/images/EditCasePhone.png';
import AdrauniPage from '/public/images/AdrauniPage.png';
import JsQuizzGame from '/public/images/JsQuizzGame.png';
import RecipesPeruvians from '/public/images/RecipesPeruvians.png';
import ZustandIcon from '/public/images/ZustandIcono.png';
import PruebaFull from '/public/images/PruebaFull.png';
import RandomPhrases from '/public/images/RandomPhrases.png';
import EditorMarkdown from '/public/images/EditorMarkdown.png';
import DrumMachine from '/public/images/DrumMachine.png';
import CalculadoraJs from '/public/images/CalculadoraJs.png';
import Clock25 from '/public/images/Clock25.png';
import RealState from '/public/images/RealState.png';
import DamasGame from '/public/images/DamasGame.png';
import TestDeveloper from '/public/images/TestDeveloper.png';
import PruebaReactDeveloper from '/public/images/PruebaReactDeveloper.png';
import DashboardCompany from '/public/images/DashboardCompany.png';
import StripeIcon from '@/components/icons/StripeIcon';
import TypeScript from '@/components/icons/TypeScript';
import LogoMaterialUi from '@/components/icons/LogoMaterialUi';
import NodeIcon from '@/components/icons/NodeIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import SassIcon from '@/components/icons/SassIcon';
import Leaflet from '@/components/icons/Leaflet';
import VideoPlayer from '@/components/video/VideoPlayer';
import Paypal from '@/components/icons/Paypal';
import NextAuthIcon from '@/components/icons/NextAuthIcon';
import MySqlIcon from '@/components/icons/MySqlIcon';
import Shadcn from '@/components/icons/Shadcn';
import ClerkIcon from '/public/images/ClerkIcon.png';

export default function Home() {
  return (
    <>
      <div className={`w-full bg-slate-800`}>
        <Header />
        <main className="px-4">
          <section className="ml-10 md:ml-28 md:max-w-[800px] lg:max-w-xl lg:ml-48 mb-20 mt-32">
            <div className="flex gap-10">
              <div>
                <Image
                  className="rounded-full"
                  src="https://pbs.twimg.com/profile_images/1730607351781117952/N97efvUT_400x400.jpg"
                  alt="Foto de Cesarscc"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex items-center hover:transition-all hover:ease-out hover:delay-75 hover:scale-110">
                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                  <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                    <a
                      href="https://www.linkedin.com/in/cesarcolorado/"
                      target="_blank"
                    >
                      Disponible para trabajar
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                Hola, soy César Colorado
              </h1>
              <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
                Más de 3 años de experiencia.{' '}
                <strong>Desarrollador Front Developer en React JS.</strong> de
                Lima, Perú. Dedicado al desarrollo de aplicaciones web.
              </p>
            </div>
            <div className="flex gap-6 mt-4">
              <a
                href="mailto:cesar13289@hotmail.com"
                className="w-36 h-8 flex justify-center items-center cursor-pointer gap-2 bg-[#1c1d78] rounded-xl border-[0.5px]"
              >
                <p>
                  <Mail />
                </p>
                <p className="text-white">Contáctame</p>
              </a>
              <a
                href="https://www.linkedin.com/in/cesarcolorado/"
                target="_blank"
                className="w-36 h-8 flex justify-center items-center cursor-pointer gap-2 bg-[#1c1d78] rounded-xl border-[0.5px]"
              >
                <p>
                  <Linkedin />
                </p>
                <p className="text-white">Linkedin</p>
              </a>
            </div>
          </section>
          <section
            className="ml-10 md:ml-28 lg:ml-48 max-w-4xl mb-20"
            id="experiencia"
          >
            <div className="flex gap-10">
              <p>
                <Maletin />
              </p>
              <p className="text-white text-4xl font-bold tracking-tight">
                Experiencia Laboral
              </p>
            </div>
            <div className="mt-10 relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
                    &bull;
                  </span>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Desarrollador front-end , back-end y automatizaciones
                  </h3>
                  <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                    Firstmed Pharma · Jornada completa
                  </h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                    jul. 2024 - actualidad · 4 meses
                  </time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                &bull; Implementé aplicativos web estáticos con Next Js y
                TailwindCss para ser subidos posteriormente a un Bucket de S3
                AWS. <br />
                &bull; Implementé Microservicios en Express Js en funciones
                Lambda de AWS para ser consumidos, microservicios de Api Google
                Sheets, Pixel de Meta y Api de Conversiones de Meta, poniendo
                seguridad con los CORS.
                <br /> &bull;Configuré el dominio y subdominios en GoDaddy y
                hosting en AWS para ser desplegados. <br /> &bull; Implementé
                configuraciones de Google Analytics para el monitoreo de la
                página web. <br /> &bull; Implementé automatizaciones de
                Facebook Leads hacía el CRM Bitrix mediante la herramienta
                LeadsBridge.
                <br /> &bull; Implementé una base de datos MySql en Digital
                Ocean para el registro y monitoreo de los aplicativos web.
                <br />
                &bull; Implementé microservicios de registros y escritura en
                Express Js para ser subidos con App Web en Digital Ocean,
                dándole seguridad <br /> &bull;Implementé un Dashboard donde se
                podrán ver los registros de la base de datos tanto por día o
                mensual, y también poder descargarlos en formato Excel.
              </div>
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
                    &bull;
                  </span>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Desarrollador front-end y Automatizaciones
                  </h3>
                  <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                    Mantra Chat · Jornada completa
                  </h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                    feb. 2022 - ene. 2024 · 2 años
                  </time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                &bull; Urbalima: Desarrollo de la página web
                <br /> https://urbalima.pe/ <br /> &bull; Revoshop: Dar Soporte
                Web | (Home, Servicios)
                <br /> &bull; Euroshop: Dar Soporte Web | (Home, Blog) <br />{' '}
                &bull; Jetour: Dar Soporte Web <br /> &bull; Mantra: Desarrollar
                automatizaciones con n8n.io e integraciones con CRM&apos;s como:
                HubSpot, Zoho CRM, Zapier, Calendly.
                <br /> También dar soporte web a la landing:
                https://www.mantra.chat/
              </div>
              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">
                    &bull;
                  </span>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Desarrollador web
                  </h3>
                  <h4 className="font-semibold text-xl text-gray-600 dark:text-white">
                    Imcetron · Profesional independiente
                  </h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                    oct. 2022 - dic. 2022 · 3 meses
                  </time>
                </div>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                &bull; Estuve a cargo de todo el desarrollo de la página web,
                con las siguientes tecnologías: Next Js, TailwindCss, Prismic,
                Figma
                <br />
                https://www.imcetron.com.pe/
              </div>
            </div>
          </section>
          <section
            className="ml-10 md:ml-28 lg:ml-48 max-w-4xl mb-20"
            id="proyectos"
          >
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-white">
              <Code />
              Proyectos
            </h2>
            <div className="flex flex-col gap-y-16">
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Card Twitter"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={TwitterCard}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Cards Twitter
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto que muestra el cambio de estados de las tarjetas
                      de twitter, usando Hooks de React.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-01-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Recién llegado vs 5 años en Nueva Zelanda"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={TicTacToe}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Tic Tac Toe
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto que simula el juego de 3 en raya, con la
                      finalidad de usar Hooks de React.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-02-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Mouse Follower"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={MouseFollower}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Mouse Follower
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto para manejar estados, que en un estado inicial un
                      (&bull;) no te sigue, y al activar la opción de seguir
                      puntero el (&bull;) se posiciona siempre en tu puntero.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-03-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Prueba Técnica"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={PruebaTecnica}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Prueba Técnica
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Prueba técnica, donde se requería consumir el Api de un
                      generador de imágenes de gatos con las 3 primeras palabras
                      que genere una imagen con un texto con esas mismas 3
                      palabras.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-04-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Buscador de Películas"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={BuscadorPeliculas}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Buscador de Películas
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto donde consumimos una Api para realizar una
                      búsqueda de películas, y podemos ordenarlas
                      alfabéticamente. Realiza una búsqueda cuando por lo menos
                      hay 3 letras.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-05-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Carrito de Compras"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={ShoppingCart}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Carrito de Compras
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto donde interactuaremos con un carrito de compras,
                      podemos filtrar por precios y categorías, añadir a nuestro
                      carrito y también quitarlo.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-06-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Clone Google Translate"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={CloneGoogleTranslate}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Google Translate Clone
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Ts</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto donde simulamos la funcionalidad de Google
                      translate, desarrollada con React y TypeScript. Usamos la
                      Api de Deepl para hacer la traducción.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-08-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Crud con REDUX Toolkit"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={CrudRedux}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Crud React Redux
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Ts</strong>
                      </li>
                      <li className="flex items-center">
                        <Redux />
                        <strong className="text-white text-sm">
                          Redux Toolkit
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Proyecto de un CRUD usando Redux Toolkit.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-09-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Prueba Técnica"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={PruebaTecnicaEmpresa}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Prueba Técnica
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Ts</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Desarrollo de una prueba técnica, podremos ver el uso de
                      los filtros.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'http://react-10-cc.surge.sh/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Web Imcetron"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={ImcetronPage}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Imcetron
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 lg:flex lg:flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white ml-1 text-sm">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          Tailwind CSS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <PrismicIcon />
                        <strong className="text-white ml-1 text-sm">
                          Prismic CMS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <FigmaIcon />
                        <strong className="text-white text-sm">Figma</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Desarrollo de una página web para una empresa que
                      comercializa materiales eléctricos y aislantes.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://www.imcetron.com.pe/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Buscador de Gift"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={GifSearch}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Buscador de Gif&apos;s
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                      <li className="flex items-center ml-1">
                        <NetlifyIcon />
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Desarrollo de un buscador de Gif&apos;s, consumiendo la
                      api giphy, usando hooks.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://gif-ccesar-demo.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Web Responsive"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={BeeFrontend}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Bee Frontend
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm">React Js</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Desarrollo de una prueba técnica, usando netamente CSS y
                      los hooks de React, para los filtros y estilos.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc.github.io/bee_frontend/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Responsive Web"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={BatatabitResponsive}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Batatabit Responsive
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <HtmlIcon />
                        <strong className="text-white text-sm">HTML</strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Desarrollo de una simple landing responsive, a puro CSS.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc.github.io/Mobile-Proyect/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="CRUD con Django"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={CrudDjango}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    CRUD Tareas
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm ml-1">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <DjangoIcon />
                        <strong className="text-white text-sm ml-1">
                          Django
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm ml-1">
                          TailwindCss
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web de tareas, con la finalidad de poder hacer
                      un CRUD usando Django para el Backend y NextJs con
                      TailwindCss para el frontend
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://nextjs-djangorest.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Pasarela de pagos"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={PasarelaStripe}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Pasarela de Pagos de un item
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm ml-1">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <StripeIcon />
                        <strong className="text-white text-sm ml-1">
                          Stripe
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm ml-1">
                          TailwindCss
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web de compras en línea. Guardando la
                      información de los pagos realizados mediante Webhook de
                      Stripe
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://pasarela-pagos-stripe.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Recién llegado vs 5 años en Nueva Zelanda"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={ExamSimulator}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Exam Simulator
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm ml-1">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <DjangoIcon />
                        <strong className="text-white text-sm ml-1">
                          Django
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm ml-1">
                          TailwindCss
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web de práctica de exámenes. Dentro encontrarás
                      secciones para publicar sobre preguntas/comentarios
                      respecto de un tema, o también para descargar material de
                      apoyo.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://exam-simulator.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="App web for case phone"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={EditCasePhone}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Edit Case Phone
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm ml-1">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <Redux />
                        <strong className="text-white text-sm">
                          Redux Toolkit
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm ml-1">
                          TailwindCss
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web para que puedan subir imágenes (pueden ser
                      1 o 2 imágenes) para verlas reflejadas en el case de
                      algunos modelos de celulares, pueden usar las diferentes
                      funcionalidades de estilos para cada imagen
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://edit-case-phone.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Adrauni page"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={AdrauniPage}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Adrauni
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 lg:flex lg:flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white ml-1 text-sm">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          Tailwind CSS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <PrismicIcon />
                        <strong className="text-white ml-1 text-sm">
                          Prismic CMS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <FigmaIcon />
                        <strong className="text-white text-sm">Figma</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Desarrollo de una página web para la Agrupación por la
                      Defensa y Respeto hacia los Animales de la UNI (ADRAUNI).
                      Pueden poner una lista de eventos que harán en tiempo
                      real, pueden poner los casos que hay por cada rescatista,
                      pueden poner los perritos y gatitos en adopción con toda
                      su información.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://adrauni.pet/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="App web for case phone"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={JsQuizzGame}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    JavaScript Quizz Game
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 lg:flex lg:flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white text-sm ml-1">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TypeScript />
                        <strong className="text-white text-sm">
                          TypeScript
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <div>
                          <Image
                            alt="Zustan Icon"
                            loading="lazy"
                            width={50}
                            height={50}
                            src={ZustandIcon}
                          />
                        </div>
                        <strong className="text-white text-sm ml-1">
                          Zustand
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <LogoMaterialUi />
                        <strong className="text-white text-sm ml-1">
                          Material Ui
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que lanza una serie de preguntas sobre
                      JavaScript para que puedan ser respondidas por los
                      usuarios, indicando si la respuesta es correcta o
                      incorrecta además de un historial de como va con las
                      preguntas (buenas, incorrectas y no respondidas)
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-js-quizz-game.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="App web recipes peruvians"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={RecipesPeruvians}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Recipes Peruvians
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 lg:flex lg:flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white ml-1 text-sm">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <div>
                          <Image
                            alt="Zustan Icon"
                            loading="lazy"
                            width={50}
                            height={50}
                            src={ZustandIcon}
                          />
                        </div>
                        <strong className="text-white text-sm ml-1">
                          Zustand
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          Tailwind CSS
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que genera un recetario de comidas
                      peruanas, pueden buscar con el paginador alguna receta, o
                      también pueden buscar mediante los ingredientes que
                      contiene, pueden guardar la receta en un tarjetero que va
                      apilando todas las recetas, también puedes desarchivar las
                      recetas, vista responsive.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-recipes-peruvians.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="App Prueba Técnica"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={PruebaFull}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Prueba Full Stack
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <NodeIcon />
                        <strong className="text-white text-sm ml-1">
                          Node Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que carga un CSV para que se pueda realizar
                      la búsqueda de coincidencias que tengan las columnas del
                      CSV, está implementado en Node Js con Express con
                      validación de errores y React Js.
                      <br />
                      <small>
                        Para poder usar el aplicativo clone el repositorio: pnpm
                        install & pnpm run dev
                      </small>
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://github.com/Cesarscc/prueba-tecnica-full'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <GithubIcon />
                        </p>
                        <p className="text-gray-400">Github</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="App Prueba Técnica"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={RandomPhrases}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Generador de Frases Random
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <SassIcon />
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que generar frases random cuantas veces
                      hagas la petición mediante el botón de obtener una nueva
                      frase.
                      <br />
                      <small className="font-sans">
                        Consumo de api, Preprocesador de hoja de estilos,
                        animaciones, responsive
                      </small>
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-random-phrases.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Editor de Markdown"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={EditorMarkdown}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Previsualizador de <strong>Markdon</strong>
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <SassIcon />
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que puedes escribir la sintaxis Markdown y
                      este mismo te hará una previsualización de como se vería.
                      <br />
                      <small className="font-sans">
                        Preprocesador de hoja de estilos, responsive,
                        funcionalidad para el editor, funcionalidad para la
                        previsualización
                      </small>
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-editor-markdown.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Drum Machine"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={DrumMachine}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Simulador de Batería Electrónica
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <SassIcon />
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web, puedes clickear sobre los pad&apos;s del
                      simulador o también presionando las teclas
                      correspondientes a los pad&apos;s, de esta manera puedes
                      generar sonidos y armar una melodía!. También puedes
                      ajustar el volumen, apagar la batería, cambiar de estilos
                      de sonidos.
                      <br />
                      <small className="font-sans">
                        Preprocesador de hoja de estilos, responsive,
                        funcionalidad para el simulador, control de eventos,
                        controles del simulador
                      </small>
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-drum-machine.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Calculadora Js"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={CalculadoraJs}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Calculadora Js
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <SassIcon />
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que simula una calculadora, puedes usarla
                      para ayudarte en tus operaciones!
                      <br />
                      <small className="font-sans">
                        Preprocesador de hoja de estilos, responsive,
                        funcionalidades para la calculadora
                      </small>
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-calculator.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Clock 25 5"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={Clock25}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    25 + 5 Clock
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <SassIcon />
                      </li>
                      <li className="flex items-center">
                        <CssIcon />
                        <strong className="text-white text-sm">CSS</strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que trata de un sistema de gestión del
                      tiempo. Con este método, divide tu jornada laboral en
                      periodos de 25 minutos separados por descansos de cinco
                      minutos (Pueden ajustar los tiempos a lo que veas
                      adecuado).
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-clock-25-5.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Real State"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={RealState}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Inmobiliaria Bienes Raíces
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 lg:flex lg:flex-row mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          Tailwind CSS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm">Next Js</strong>
                      </li>
                      <li className="flex items-center">
                        <Leaflet />
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que trata de una vista de alguna
                      inmobiliara que tiene propiedades en ventas para el
                      público en general, pueden inspeccionar cada lugar, y
                      tamién pueden ver las ubicaciones de cada propiedad,
                      además tienen un carrusel de imágenes para que puedan ver
                      a detalle, cuando pulsan en alguna ubicación del mapa les
                      dará una vista previa del lugar, además de un botón para
                      redirigirlos a ver la propiedad a detalle.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://cesarscc-real-state.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50 mt-12">
                    <div className="h-[45dvh] sm:h-[400px] w-full">
                      <VideoPlayer />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Tu Tienda PE
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-3  mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <div>
                          <Image
                            alt="Zustan Icon"
                            loading="lazy"
                            width={50}
                            height={50}
                            src={ZustandIcon}
                          />
                        </div>
                        <strong className="text-white text-sm ml-1">
                          Zustand
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          Tailwind CSS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm">Next Js</strong>
                      </li>
                      <li className="flex items-center">
                        <Leaflet />
                      </li>
                      <li className="flex items-center">
                        <Paypal />
                        <strong className="text-white text-sm ml-1">
                          Paypal
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <StripeIcon />
                        <strong className="text-white text-sm ml-1">
                          Stripe
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <NextAuthIcon />
                        <strong className="text-white text-sm ml-1">
                          Next Auth
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <MySqlIcon />
                      </li>
                    </ul>
                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo Web para una tienda en línea, pueden registrase
                      mediante GitHub o Google, o en todo caso mediante el
                      formulario de registro de la misma página, una vez
                      registrado se guarda su usuario (encriptado) en la base de
                      datos de MySql, y pueden loguearse en el formulario de
                      inicio. Pueden ver la página de inicio,la ubicación de la
                      tienda, los productos, y guardarlos en su carrito de
                      compras para luego pagarlos mediante Stripe o Paypal y
                      finalmente se registra en su historial de compras.
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Game Damas"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={DamasGame}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Damas Game
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          Tailwind CSS
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white text-sm">Next Js</strong>
                      </li>
                      <li className="flex items-center">
                        <div>
                          <Image
                            alt="Zustan Icon"
                            loading="lazy"
                            width={50}
                            height={50}
                            src={ZustandIcon}
                          />
                        </div>
                        <strong className="text-white text-sm ml-1">
                          Zustand
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web simulando el juego de damas, guarda tu
                      partida cuando actualizas la página, y con la lógica del
                      juego.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://game-damas.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Test Web Developer"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={TestDeveloper}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Technical Test Web Developer
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TypeScript />
                        <strong className="text-white text-sm">
                          TypeScript
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <SassIcon />
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que busca los 10 primeros perfiles de
                      GitHub, también muestra los seguidores que tienen, y un
                      redireccionamiento a cada usuario como página.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://technical-test-web.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Prueba React Developer"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={PruebaReactDeveloper}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Prueba React Developer
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 mb-2 gap-x-2">
                      <li className="flex items-center">
                        <ReactIcon />
                        <strong className="text-white ml-1 text-sm">
                          React Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TypeScript />
                        <strong className="text-white text-sm">
                          TypeScript
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          TailwindCss
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <Redux />
                        <strong className="text-white text-sm">
                          Redux Toolkit
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Aplicativo web que te brinda 2 zonas a buscar series o
                      movies, dentro de cada zona puedes filtrar por la cantidad
                      de elementos que deseas ver, puedes también buscarlo por
                      url, tienes un paginador para mostrar más elementos.
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://prueba-react-developer.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
              <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                    <Image
                      alt="Dashboard Companys"
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={800}
                      src={DashboardCompany}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Dashboard Companys
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="grid grid-cols-2 mb-2 gap-x-2">
                      <li className="flex items-center">
                        <NextJsIcon />
                        <strong className="text-white ml-1 text-sm">
                          Next Js
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TypeScript />
                        <strong className="text-white text-sm">
                          TypeScript
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <TailwindIcon />
                        <strong className="text-white text-sm">
                          TailwindCss
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <Shadcn />
                        <strong className="text-white text-sm ml-1">
                          Shadcn UI
                        </strong>
                      </li>
                      <li className="flex items-center">
                        <div>
                          <Image
                            className="rounded-full"
                            alt="Clerk Icon"
                            loading="lazy"
                            width={35}
                            height={35}
                            src={ClerkIcon}
                          />
                        </div>
                        <strong className="text-white text-sm ml-1">
                          Clerk
                        </strong>
                      </li>
                    </ul>

                    <div className="mt-2 text-gray-700 dark:text-gray-400">
                      Dashboard Web para el control de las compañías, tener
                      métricas y ver gráficas, todo con registro usando Clerk,
                      Shadcn, Prisma ORM
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        target="_blank"
                        href={'https://dashboard-company.netlify.app/'}
                        className="rounded-xl transition border border-gray-600 bg-gray-800 w-28 h-8 text-center flex justify-center items-center gap-2 hover:border-0 hover:bg-gray-800 hover:border-gray-900 hover:text-white"
                      >
                        <p>
                          <Preview />
                        </p>
                        <p className="text-gray-400">Preview</p>
                      </a>
                    </footer>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="ml-10 md:ml-28 lg:ml-48 max-w-4xl" id="sobre-mi">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white">
              <ProfileCheck className="size-8" />
              Sobre mí
            </h2>
            <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
              <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
                <p>
                  Me llamo César Colorado. Empecé en la programación con la
                  curiosidad en Scratch, tenía 18 años. Actualmente me encuentro{' '}
                  <strong>
                    trabajando profesionalmente y haciendo proyectos propios
                  </strong>
                  .
                </p>

                <p>
                  Mi formación profesional es en{' '}
                  <strong>
                    Ciencia de la Computación en la Universidad Nacional de
                    Ingeniería (UNI), Perú
                  </strong>
                  . Aunque también fue en parte ser autodidacto, aprendí lo que
                  necesitaba para poder realizar mis primeros proyectos.
                </p>
                <p>
                  Como desarrollador,{' '}
                  <strong>
                    manejo React Js y Next Js para el Frontend, también CSS o
                    TailwindCss,CMS como Prismic, Figma, afinidad al diseño
                    UI/UX{' '}
                  </strong>
                  cuento con experiencia en consumo de Api&apos;s, experiencia
                  en backend, y habilidades en JavaScript, TypeScript, Python,
                  MySql, MongoDB. Algunas integraciones a CRM&apos;s como
                  HubSpot, Calendly, Zoho . Mi objetivo es poder ir
                  enfrentándome a nuevos desafios para poder seguir creciendo
                  como persona y como desarrollador.
                </p>
              </div>

              <Image
                width="200"
                height="200"
                src={
                  'https://pbs.twimg.com/profile_images/1730607351781117952/N97efvUT_400x400.jpg'
                }
                alt={'Profile'}
                className=" order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 "
                style="object-position: 50% 50%"
              />
            </article>
          </section>
        </main>
      </div>
    </>
  );
}
