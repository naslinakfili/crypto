import { useNavigate } from 'react-router-dom'
import User from "./assets/user-white.png"


function Dashboard01(): React.JSX.Element {
    const navigate = useNavigate();

    const handleStart = (): void => {
        navigate('/Utama');
    };

    return (
        <div className="flex w-full justify-center bg-black min-h-screen pt-6">
            <div className='max-w-md'>
                <div className="flex w-full justify-end pr-4 mb-10">
                    <button type='button' className="bg-white/10 px-2 py-2 rounded-full flex items-center justify-center cursor-pointer">
                        <img src={User} alt="" className="w-6"/>
                    </button>
                </div>
                

                <div className="flex flex-col w-full items-center text-center">
                    <h1 className="text-orange-400/90 text-[0.85rem] font-semibold">NEXA VAULT</h1>
                    <p className="text-white text-3xl font-bold">Kendalikan
                    Aset Kripto Anda</p>
                </div>

                <div className="flex w-full justify-center relative mt-18">
                    <div className="flex justify-center items-center logo-1 border-2 border-orange-400/80 w-40 h-40 rounded-3xl relative">
                        <div className="logo-2 flex justify-center items-center h-14 w-14 rounded-full bg-linear-to-br from-[#ff4e71] via-[#ff6b52] to-[#ffaa52] blur-[3px] absolute"></div>
                        <svg className="logo-2 z-50 w-12 h-12 overflow-visible" viewBox="0 0 100 87" fill="none">
                                <polygon 
                                    points="25,2 75,2 98,43.5 75,85 25,85 2,43.5" 
                                    stroke="white" 
                                    strokeWidth="7" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                    </div>
                </div>

                <div className="flex justify-center w-full text-center flex-col items-center text-wrap text-white text-[0.8rem] font-bold pt-20">
                    <p className="">Pantau harga real-time, hitung margin
                    trading, dan kelola portofolio dalam
                    satu genggaman</p>
                </div>

                <div className="flex justify-center mt-8 w-full">
                    <button type='button' onClick={handleStart} className="bg-linear-to-br from-[#ff4e71] via-[#ff6b52] to-[#ffaa52] rounded-lg px-15 py-3 cursor-pointer w-full" >MULAI SEKARANG</button>
                </div>
            </div>

        </div>
    )
}

export default Dashboard01