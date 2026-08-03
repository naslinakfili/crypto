import User from "./assets/user-white.png"
import Layers from "./assets/layers-white.png"
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import BtnNavigation from "./bottomnavigation";

//======================================
// interface Fetch crypto
//======================================
 interface MarketCrypto {
        name: string;
        current_price: number;
        price_change_percentage_24h: number;
        high_24h: number;
        low_24h: number;
    }

function Utama(): React.JSX.Element {

    const navigate = useNavigate();

    const handlelever = (): void => {
        navigate('/Leverage');
    };

    //================================================
    //pengaturan tambahan
    //================================================

    const [name, setName] = useState("bitcoin");
    const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");

    //buat fungsi helper dengan typescript
    const changeCoin = (newId: string, newSymbol: string ) => {
        if (name !== newId) {
            setName(newId);
            setSymbol(newSymbol);
        }
    };

    
    //==============================================
    //fetch crypto
    //==============================================
   

    const [price, setPrice] = useState<MarketCrypto | null>(null);

    useEffect (() => {
        const fetchData = async () => {
            const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${name}`
            try {
                const response = await fetch(url);
                const data: MarketCrypto[] = await response.json();

                if (data && data.length > 0){ //memastikan data tidak null dan data yang dikirim tidak kosong minimal 1 item
                setPrice(data[0]); //data[0]  mengapa harus ada index 0 karna data di kembalikan dalam bentuk array yang di dalamnya object [{}] []=array {}=object
                    } 

                } 
            catch {
                console.error("Gagal mengambil data:", "error");
            }
        };

        fetchData();
        //Interval untuk update harga
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [name]);

    //=============================================================
    // click name crypto
    //=============================================================

    

    

    return (
        <div className="bg-black flex justify-center w-full min-h-screen">
            <div className="flex flex-col items-center min-h-screen max-w-md w-full px-4">
            <div className="flex flex-row justify-between w-full mt-6">
                <div className="flex flex-col items-end  justify-end  w-[60%] pr-4">
                    <h1 className="text-white text-[1rem] font-bold ">Pasar</h1>
                    <h2 className="text-white/30 text-[0.68rem] mr-1">{price?.name || `Loading`}</h2>
                </div>
                
                <div className="flex justify-end w-[40%] ">
                    <button className="bg-white/10 rounded-full px-2 py-2 cursor-pointer"><img src={User} className="w-6" alt="" /></button>
                </div>
                
            </div>

            <div className="flex w-full pl-4 mt-6">
                <div className="flex gap-2">
                    <button type="button" onClick={() => changeCoin("bitcoin", "BINANCE:BTCUSDT")} className={`px-4 rounded-2xl cursor-pointer py-0.5 transition-all duration-200 hover:bg-slate-200/30 ${name === "bitcoin" ? "text-white shadow-[0_0_15px_rgba(232,121,249,0.3)] ring-1 ring-fuchsia-300/50" : "text-white/30 bg-slate-200/20"}`}>BTC</button>
                    <button type="button" onClick={() => changeCoin("solana", "BINANCE:SOLUSDT")} className={`px-4 rounded-2xl cursor-pointer py-0.5 transition-all duration-200 hover:bg-slate-200/30  ${name === "solana" ? "text-white shadow-[0_0_15px_rgba(232,121,249,0.3)] ring-1 ring-fuchsia-300/50" : "text-white/30 bg-slate-200/20"}`}>SOL</button>
                    <button type="button" onClick={() => changeCoin("ethereum", "BINANCE:ETHUSDT")} className={`px-4 rounded-2xl cursor-pointer py-0.5 transition-all duration-200 hover:bg-slate-200/30  ${name === "ethereum" ? "text-white shadow-[0_0_15px_rgba(232,121,249,0.3)] ring-1 ring-fuchsia-300/50" : "text-white/30 bg-slate-200/20"}`}>ETH</button>
                    <button type="button" onClick={() => changeCoin("avici", "MEXC:AVICIUSDT")} className={`px-4 rounded-2xl cursor-pointer py-0.5 transition-all duration-200 hover:bg-slate-200/30  ${name === "avici" ? "text-white shadow-[0_0_15px_rgba(232,121,249,0.3)] ring-1 ring-fuchsia-300/50" : "text-white/30 bg-slate-200/20"}`}>AVC</button>
                </div>
            </div>

            <div className="flex justify-between px-4 gap-2 bg-white/10 w-full rounded-2xl py-4 mt-2">
    
                <div className="">
                        <p className="text-white/30 text-[0.7rem]">HARGA SEKARANG</p>
                        <p className="text-white text-2xl font-bold">$ {price?.current_price || `0`}</p>
                    
                    <div className="flex gap-4 items-center">
                        <p className={(price?.price_change_percentage_24h || 0) >= 0 ? "text-green-400" : "text-red-400"}>
                            {(price?.price_change_percentage_24h || 0) >= 0 ? "↗" : "↙"} {price?.price_change_percentage_24h || 0}%</p>
                        <p className="text-white/30 text-[0.7rem]">simulasi live</p>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-end">
                        <p className="text-white/30 text-[0.7rem]">24H Tinggi</p>
                        <p className="text-white text-[0.9rem]">$ {price?.high_24h || `0`}</p>
                    </div>

                    <div className="flex flex-col items-end">
                        <p className="text-white/30 text-[0.7rem]">24H Rendah</p>
                        <p className="text-white text-[0.9rem]">$ {price?.low_24h || `0`}</p>
                    </div>
                    
                </div>
            </div>

            

            <div className="bg-white/10 w-full rounded-2xl px-4 py-4 mt-4">
                <div className="flex justify-between">
                    <div>
                        <p className="text-white text-[0.83rem] font-bold">Tren Harga</p>
                        <p className="text-white/30 text-[0.8rem]">12M performance</p>
                    </div>
                    
                    <div className="flex items-center">
                        <p className={` font-bold text-[1.15rem] ${(price?.price_change_percentage_24h || 0) >= 0 ? "text-green-400" : "text-red-400"}`}>{price?.price_change_percentage_24h || `0`}%</p>
                    </div>
                    
                </div>

                {/* Pembungkus Chart */}
                <div className="w-full h-80 rounded-2xl overflow-hidden">
                    <AdvancedRealTimeChart 
                        theme="dark" 
                        symbol={symbol} 
                        autosize 
                        hide_side_toolbar={true}
                        allow_symbol_change={false}
                    />
                </div>
            </div>


            <button type="button" onClick={handlelever} className="w-full flex items-center justify-between bg-fuchsia-300/30 rounded-lg mt-4 px-4 py-2 cursor-pointer mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-amber-300 flex items-center justify-center rounded-lg">
                        <img src={Layers} alt="" className="w-6 " />
                    </div>

                    <div className="">
                        <p className="text-white text-[0.8rem] font-bold">Kalkulator Leverage</p>
                        <p className="text-white/30 text-[0.72rem]">Hitung estimasi margin</p>
                    </div>
                </div>

                <div className="text-white/30">
                    ▷
                </div>
                
            </button>

            <BtnNavigation />

        </div>
        </div>
        
    )
}

export default Utama