import Image from "next/image";
import Navbar from '../components/Navbar';
import FullScreenBanner from '../components/FullScreenBanner'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex bg-white">
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-left text-gray-900 p-8">
          <p className="mb-4 text-xl font-semibold">The moon is just a pit stop for JAVA,</p>
          <h1 className="text-orange-500 leading-8 mb-12 text-5xl font-bold">THE GALAXY</h1>
          <h1 className="text-orange-500 leading-8 mb-12 text-5xl font-bold">is our next stop!</h1>
          <p className="mb-4 text-xl font-semibold">Trading, staking, farming and gaming have never been so easy on the most affordable DEX in the DeFi ecosystem! Prepare for JavaSwap’s intergalactic take off!</p>
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-yellow-300 via-yellow-300 to-red-400 hover:from-yellow-400 hover:via-yellow-400 hover:to-red-600 text-white px-4 py-2 rounded" style={{ 
              background: 'linear-gradient(to right, rgb(255, 232, 141) 0%, rgb(255, 232, 141) 1.01%, rgb(183, 91, 89) 69.72%, rgb(155, 34, 68) 100%)',
            }}>
              Connect Wallet
            </button>
            <button className="bg-white text-red-600 px-4 py-2 rounded border-2 border-red-600" style={{ 
              color: 'rgb(155, 34, 68)'
            }}>
              Trade Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-white bg-cover bg-center"></div>
    </div>

    <section className="flex flex-col items-center justify-center w-screen h-screen bg-white">
      <img src="/tu-imagen.jpg" alt="JavaSwap" className="mb-8" />
      <h2 className="text-3xl font-bold mb-4 text-pink-500 leading-tight">
        For the people, by the people, <br />with the people: JavaSwap
      </h2>
      <p className="text-lg text-center">
        JavaSwap is increasing the accessibility and usability<br />
        of DeFi by making its services affordable for all! Just. Join. JAVA!
      </p>
    </section>


    <section className="flex flex-col items-center justify-center w-screen min-h-screen bg-white">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center md:flex-nowrap">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 my-4 md:w-1/3 md:flex-col p-4" style={{ background: 'linear-gradient(90deg, rgb(254, 229, 96) 0%, rgb(250, 207, 93) 47%, rgb(242, 169, 88) 72%)' }}>
            <img src="/imagen1.jpg" alt="Imagen 1" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Every day</div>
              <p className="text-gray-700 text-base">
                More and more people turn to crypto and use their own wallets to be truly in control of their own finances. Control your own financial future with JavaSwap.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 my-4 md:w-1/3 md:flex-col p-4" style={{ background: 'linear-gradient(90deg, rgb(254, 229, 96) 0%, rgb(250, 207, 93) 47%, rgb(242, 169, 88) 72%)' }}>
            <img src="/imagen2.jpg" alt="Imagen 2" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The era</div>
              <p className="text-gray-700 text-base">
                Of decentralisation is upon us and decentralised finance is the first true step to financial freedom. Never lose control with JavaSwap.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 my-4 md:w-1/3 md:flex-col p-4" style={{ background: 'linear-gradient(90deg, rgb(254, 229, 96) 0%, rgb(250, 207, 93) 47%, rgb(242, 169, 88) 72%)' }}>
            <img src="/imagen3.jpg" alt="Imagen 3" className="w-full" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">$470485.077</div>
              <p className="text-gray-700 text-base">
                Total Value Locked. Staked in farms and pools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="flex bg-white">
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-left text-gray-900 p-8">
          <h1 className="text-orange-500 leading-8 mb-12 text-5xl font-bold">JAVASWAP</h1>
          <p className="mb-4 text-xl font-semibold">JavaSwap is increasing the accessibility and usability of DeFi by making its services affordable for all! There is no KYC, so the people can be financially free!</p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full" style={{ backgroundColor: 'rgb(155, 34, 68)' }}>
              Trade Now
            </button>
            <button className="bg-white text-red-600 px-4 py-2 rounded-full" style={{ border: 'none' }}>
              JAVAcademy
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-white bg-cover bg-center"></div>
    </div>


    <div className="flex bg-white">
      <div className="w-1/2 h-screen bg-white bg-cover bg-center"></div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-left text-gray-900 p-8">
          <h1 className="text-orange-500 leading-8 mb-12 text-5xl font-bold">BE REWARDED</h1>
          <p className="mb-4 text-xl font-semibold">JavaSwap gives users ways to earn passive income whilst doing absolutely nothing firstly by staking JAVA in Espresso Pools and secondly by earning crazy APY yield on the LP-tokens provided on Java Farms. Join the JavaSwap revolution and get rewarded!</p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full" style={{ backgroundColor: 'rgb(155, 34, 68)' }}>
            Explore
            </button>
            <button className="bg-white text-red-600 px-4 py-2 rounded-full" style={{ border: 'none' }}>
            Learn
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl text-center text-orange-500 font-bold mb-8">Come take a shot is our motto, and get rich from JavaSwap Lucky Lotto!</h2>
        <p className="text-lg text-gray-800 text-center mb-8">Step right up and earn some juicy rewards! Buy Lucky Lotto tickets with JAVA and if your combination matches, then you’ll win even more JAVA! JavaSwap has games to play with many more on the way! Get ready to reap the rewards!</p>
      </div>
    </div>


     
    

    <div className="flex justify-center items-center w-full h-3/4 bg-white">
      <div style={{ backgroundColor: 'rgb(135, 152, 36)' }} className="flex flex-col md:flex-row justify-center items-center w-3/4 rounded-lg">
        <div className="w-full md:w-1/3 h-full flex items-center justify-center">
          <img src="url_de_la_imagen" alt="Descripción de la imagen" className="w-3/4 h-3/4 object-cover rounded-lg" />
        </div>

        <div className="w-full md:w-2/3 h-full flex items-center">
          <div className="max-w-md mx-auto text-left text-white p-8">
            <p className="mb-4 text-xl font-semibold">
              Lucky Lotto
            </p>
            <h1 className="mb-6 text-5xl font-bold text-orange-500">
              $0
            </h1>
            <p className="mb-4 text-lg font-semibold">
              in JAVA prizes this round. Buy tickets with JAVA, win JAVA if your numbers match.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-red-600 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgb(155, 34, 68)', color: 'white' }}>
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="flex bg-white">
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-left text-gray-900 p-8">
          <div className="mb-6">
            <h2 className="text-orange-500 leading-8 text-3xl font-bold">JAVA IS THE HEART OF</h2>
            <h2 className="text-orange-500 leading-8 mb-6 text-3xl font-bold">JAVASWAP</h2>
          </div>
          <p className="mb-4 text-lg font-semibold">JAVA is the native token on JavaSwap. With JAVA you can stake, earn and win even more JAVA!</p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-full" style={{ backgroundColor: 'rgb(155, 34, 68)' }}>
            Buy JAVA
            </button>
            <button className="bg-white text-red-600 px-4 py-2 rounded-full" style={{ border: 'none' }}>
            Learn
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-white bg-cover bg-center"></div>
    </div>
  
     
    <FullScreenBanner/>
     
    </main>
  );
}
