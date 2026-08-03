import Layers from "./assets/layers-white.png"
import Gear from "./assets/gear-white.png"
import Chart from "./assets/chart-white.png"
import Hexagon from "./assets/hexagon-white.png"
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function BtnNavigation () {

        const navigate = useNavigate();
        const location = useLocation();
        const [navigating, setNavigating] = useState<string | null>(null);

        const isActive = (path: string): string => {
            if (navigating) return "";
            return location.pathname === path ? "active" : "";
        };

        const isNavigating = (path: string): string => {
            return navigating === path ? "navigating" : "";
        };

        const navigateWithDelay = (path: string, handler: () => void): void => {
            // Jika sudah di halaman tujuan, tidak perlu apa-apa
            if (location.pathname === path) return;
            
            // Jika sedang dalam proses navigasi, abaikan klik lain
            if (navigating) return;

            // Aktifkan status "navigating" untuk tombol yang diklik
            setNavigating(path);

            // Delay sebelum pindah halaman (800ms)
            setTimeout(() => {
                handler();
                // Reset status setelah navigasi
                setTimeout(() => setNavigating(null), 600);
            }, 800);
        };

        const handleutama = (): void => {
            navigate('/Utama');
        };

        const handleleverage = (): void => {
            navigate('/Leverage');
        };

        const handleportolio = (): void => {
            navigate('/Portofolio')
        }

        // Reset navigating jika halaman berubah (misal via back button)
        useEffect(() => {
            setNavigating(null);
        }, [location.pathname]);

        return (
                <div className="mt-auto pb-4 w-full">
                    <div className="flex w-full justify-around items-center">
                        <div className="nav-btn cursor-pointer" onClick={() => {}}>
                            <img src={Gear} alt="" className="w-5 cursor-pointer" />
                        </div>
                        <div className={`nav-btn cursor-pointer ${isActive('/Portofolio')} ${isNavigating('/Portofolio')}`} onClick={() => navigateWithDelay('/Portofolio', handleportolio)}>
                            <img src={Layers} alt="" className="w-5 cursor-pointer" />
                        </div>
                        <div className={`nav-btn cursor-pointer ${isActive('/Utama')} ${isNavigating('/Utama')}`} onClick={() => navigateWithDelay('/Utama', handleutama)}>
                            <img src={Hexagon} alt="" className="w-5 cursor-pointer" />
                        </div>
                        <div className={`nav-btn cursor-pointer ${isActive('/Leverage')} ${isNavigating('/Leverage')}`} onClick={() => navigateWithDelay('/Leverage', handleleverage)}>
                            <img src={Chart} alt="" className="w-5 cursor-pointer" />
                        </div>
                        <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
                            <span className="text-white text-3xl w-5 h-5 pb-5 flex justify-center items-center">...</span>
                        </div>
                    </div>
                </div>
        )
}

export default BtnNavigation