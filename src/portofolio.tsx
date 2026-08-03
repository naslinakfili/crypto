import User from './assets/user-white.png'
import BtnNavigation from './bottomnavigation'


function Portofolio() {

    return ( 
       <div className='flex justify-center min-h-screen items-center w-full bg-black text-white ' >
        <div className='flex flex-col max-w-md w-full min-h-screen px-4'>
            <div className='flex w-full items-center mt-6 '>
                <div className='flex flex-col justify-end items-end w-[60%] pr-2'>
                    <h1 className='text-[0.9rem] font-bold'>Portofolio</h1>
                    <p className='text-[0.65rem] text-white/30'>Ringkasan aset</p>
                </div>
                <div className='flex justify-end items-end w-[40%] pr-4'>
                    <button type='button' className='bg-white/10 px-2 py-2 rounded-full  cursor-pointer'>
                        <img src={User} alt="" className='w-6' />
                    </button>
                    
                </div>
            </div>

            <div className='flex justify-between mt-10 px-4'>
                <div>
                    <p className='text-[0.7rem] text-white/30'>TOTAL SALDO</p>
                    <p className='text-3xl font-bold'>$59,909.82</p>
                    <p className='text-[0.7rem]'>24 jam: <span className='text-green-400'>↗</span><span className='text-[0.7rem] font-bold text-green-400'> $3,780.00</span> </p>
                </div>
                <div className='flex text-center'>
                    <button className='flex justify-center items-center cursor-pointer bg-amber-300 w-10 h-10 pb-2 rounded-full text-4xl' >+</button>
                </div>
                
            </div>

            <div className='flex justify-center w-full mt-2 mb-8'>
                <ul className='w-full'>
                    <li className='flex justify-between px-4 py-4 w-full bg-white/10 rounded-2xl mt-3'>
                        <div>
                            <h1 className='font-bold'>Bitcoin</h1>
                            <p className='text-[0.8rem] text-white/30'>0.42 unit ($26,978)</p>
                        </div>

                        <div>
                            <p className='font-bold'>$64,233.93</p>
                            <p className='text-[0.85rem] text-green-400'>↗ 1.17%</p>
                        </div>
                    </li>

                    <li className='flex justify-between px-4 py-4 w-full bg-white/10 rounded-2xl mt-3'>
                        <div>
                            <h1 className='font-bold'>Bitcoin</h1>
                            <p className='text-[0.8rem] text-white/30'>0.42 unit ($26,978)</p>
                        </div>

                        <div>
                            <p className='font-bold'>$64,233.93</p>
                            <p className='text-[0.85rem] text-green-400'>↗ 1.17%</p>
                        </div>
                    </li>

                    <li className='flex justify-between px-4 py-4 w-full bg-white/10 rounded-2xl mt-3'>
                        <div>
                            <h1 className='font-bold'>Bitcoin</h1>
                            <p className='text-[0.8rem] text-white/30'>0.42 unit ($26,978)</p>
                        </div>

                        <div>
                            <p className='font-bold'>$64,233.93</p>
                            <p className='text-[0.85rem] text-green-400'>↗ 1.17%</p>
                        </div>
                    </li>
                </ul>
            </div>

           <BtnNavigation />
    
        </div>

          
        
       </div>
    )
}

export default Portofolio