import logo from '../imports/Untitled_design-1.png'
import profile from '../imports/PHOTO-2026-04-27-13-37-48.jpeg'
import qrCode from '../imports/qr-code.png'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a6b7c] to-[#2d4a5c] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
          <div className="flex flex-col items-center mb-4">
            <img
              src={logo}
              alt="State of Qatar"
              className="w-40 h-40 mb-3 object-contain"
            />
          </div>
          <h1 className="text-white text-center text-xl font-semibold mb-1">Hayya Entry Visa</h1>
          <p className="text-white/90 text-center text-xl font-semibold">for State of Qatar</p>
        </div>

        {/* Photo and Name Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
          <div className="flex gap-0 mb-4">
            <div className="w-2/3">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3 bg-gradient-to-b from-[#5a6d7a] to-[#4a5d6a] flex items-center justify-center">
              <p className="text-green-500 font-bold text-2xl whitespace-nowrap">VALID</p>
            </div>
          </div>
          <div>
            <p className="text-white/70 text-xs mb-1">FULL NAME</p>
            <h2 className="text-white text-2xl font-bold leading-tight mb-1">MOHTADY</h2>
            <h2 className="text-white text-2xl font-bold leading-tight mb-1">EHAB HASAN</h2>
            <h2 className="text-white text-2xl font-bold leading-tight mb-2">ALY BARAKAT</h2>
            <p className="text-white/80 text-sm" dir="rtl">مهتدي إيهاب حسن علي بركات</p>
          </div>
        </div>

        {/* Visa Details Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
          <h3 className="text-white font-semibold mb-4">HAYYA ENTRY VISA</h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-white/70">Valid From</p>
              <p className="text-white">2026-04-28</p>
            </div>

            <div>
              <p className="text-white/70">Valid Until</p>
              <p className="text-white">2026-07-13</p>
            </div>

            <div>
              <p className="text-white/70">ENTRY REFERENCE NO.</p>
              <p className="text-white">EG2044747465</p>
            </div>

            <div>
              <p className="text-white/70">Application Status</p>
              <p className="text-white">VALID</p>
            </div>

            <div>
              <p className="text-white/70">VISA CATEGORY</p>
              <p className="text-white">Conference and events</p>
            </div>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
          <h3 className="text-white font-semibold mb-4">PERSONAL INFORMATION</h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-white/70">Nationality</p>
              <p className="text-white">Egypt</p>
            </div>

            <div>
              <p className="text-white/70">Gender</p>
              <p className="text-white">MALE</p>
            </div>

            <div>
              <p className="text-white/70">Date of Birth</p>
              <p className="text-white">2001-10-17</p>
            </div>
          </div>
        </div>

        {/* Passport Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
          <h3 className="text-white font-semibold mb-4">PASSPORT</h3>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-white/70">Passport Number</p>
              <p className="text-white">A35520348</p>
            </div>

            <div>
              <p className="text-white/70">Passport Type</p>
              <p className="text-white">NORMAL</p>
            </div>

            <div>
              <p className="text-white/70">Passport Expiry Date</p>
              <p className="text-white">2030-10-23</p>
            </div>
          </div>
        </div>

        {/* QR Code Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg mb-3">
              <img src={qrCode} alt="QR Code" width="200" height="200" />
            </div>
            <p className="text-white/90 text-sm mb-1">EG2044747465</p>
            <p className="text-white text-lg">Hayya<span className="text-[#ffd700]">ـّ</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
