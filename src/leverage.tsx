import User from "./assets/user-white.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BtnNavigation from "./bottomnavigation";

function Leverage () {
    const navigate = useNavigate();


     const handleutama = () => {
        navigate('/Utama');
    };


    //==============================
    // pengaturan
    //==============================

    const [leverage, setLeverage] = useState(10);
    const [posisi, setPosisi] = useState(1000);

    //hitung margin
    const margin = posisi> 0 ? posisi / leverage : 0;

    //hitunh fee
    const fee = posisi> 0 ? posisi * 0.001 : 0;

    //hitung likuiditas
    const likuiditas = leverage> 1 ? 100 / leverage : 100;

    const formatDollar = (value: number) => new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);


    function handleChangePosisi(event: React.ChangeEvent<HTMLInputElement>) {
        setPosisi(Number(event.target.value));
        
    }

    

    function handleChangeLeverage(event: React.ChangeEvent<HTMLInputElement>)  {
        setLeverage(Number(event.target.value));
        
    }
    

    return(
        <div className="flex justify-center bg-black min-h-screen">
            <div className="flex flex-col text-white max-w-md min-h-screen px-4">
                <div className="flex items-center  justify-between w-full mt-6">
                    <button type="button" onClick={handleutama} 
                    className="flex justify-center items-center cursor-pointer text-white/50 bg-white/10 rounded-full w-10 h-10">◁</button>
                    <div>
                        <p className="text-[0.9rem] font-bold">Kalkulator Leverage</p>
                        <div className="flex justify-center w-full">
                            <p className="text-[0.68rem] text-white/30">BTC/USDT</p>
                        </div>
                        
                    </div>
                    <button type="button" className="bg-white/10 rounded-full px-2 py-2 cursor-pointer"><img src={User} className="w-6" alt="" /></button>
                </div>

                <div className="flex flex-col mt-6 bg-white/10 px-4 py-4 rounded-2xl">
                    <p className="text-white/30 text-[0.7rem]">UKURAN POSISI (USDT)</p>
                    <p className="text-2xl font-bold mt-2 mb-4"><span>$</span> <input className="max-w-42 focus:outline-none" type="number" value={posisi} onChange={handleChangePosisi} min="10" /></p>
                    <div className="flex gap-1.5 text-white/30 text-[0.75rem] font-bold">
                        <button onClick={() => setPosisi(100)} className="bg-white/10 px-2 py-0.5 rounded-2xl cursor-pointer">$100</button>
                        <button onClick={() => setPosisi(500)} className="bg-white/10 px-2 py-0.5 rounded-2xl cursor-pointer">$500</button>
                        <button onClick={() => setPosisi(1000)} className="bg-white/10 px-2 py-0.5 rounded-2xl cursor-pointer">$1,000</button>
                        <button onClick={() => setPosisi(5000)} className="bg-white/10 px-2 py-0.5 rounded-2xl cursor-pointer">$5,000</button>
                    </div>
                </div>

                <div className="flex flex-col mt-4 bg-white/10 px-4 py-4 rounded-2xl">
                    <div className="flex justify-between items-center">
                        <p className="text-[0.7rem] text-white/30">LEVERAGE</p>
                        <p className="text-[1.3rem]">{leverage}x</p>
                    </div>

                    <input type="range" min="1" max="100" value={leverage} onChange={handleChangeLeverage} className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ff4e71] focus:outline-none" />

                    <div className="flex text-[0.8rem] text-white/30 justify-between mt-2">
                        <p>1x</p>
                        <p>25x</p>
                        <p>50x</p>
                        <p>75x</p>
                        <p>100x</p>
                    </div>
                </div>

                <div className="flex justify-between mt-4 gap-6">

                    <div className="bg-white/10 rounded-2xl px-4 py-4 w-[50%]">
                        <p className="text-white/30 text-[0.7rem]">Margin Dibutuhkan</p>
                        <p className="font-extrabold text-[1.2rem]">${formatDollar(margin)}</p>
                    </div>

                    <div className="bg-white/10 rounded-2xl px-4 py-4 w-[50%]">
                        <p className="text-white/30 text-[0.7rem]">Estimasi Fee</p>
                        <p className="font-extrabold text-[1.2rem]">${formatDollar(fee)}</p>
                    </div>
                </div>

                <div className="border border-white/30 rounded-2xl mt-4 px-4 py-4 mb-8">
                    <div className="flex justify-between items-center">
                        <p className="text-[0.8rem] font-semibold">Jarak likuidasi (perkiraan)</p>
                        <p className="font-bold text-red-400">±{formatDollar(likuiditas)}%</p>
                    </div>
                    <p className="text-[0.7rem] text-white/30">
                        Semakin ringgi leveradge,
                        semakin kecil pergerakan
                        harga yang di butuhkan 
                        untuk mencapai likuidasi. 
                        Angka ini estimasi sederhana,
                        bukan saran finansial</p>
                </div>

                <BtnNavigation />

            </div>
        </div>
    )
}

export default Leverage