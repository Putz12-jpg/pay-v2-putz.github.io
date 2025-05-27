import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <Card className="mx-auto max-w-md bg-slate-700 border-slate-600">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold text-cyan-400">Payment Methods</h1>
            <p className="text-slate-300 text-sm">Silahkan pilih salah satu metode pembayaran di bawah ini</p>
          </div>

          {/* QR Code Section */}
          <div className="bg-slate-600 rounded-2xl p-4">
            <div className="bg-white rounded-xl p-4 mx-auto max-w-xs">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-black text-white px-2 py-1 text-xs font-bold">QRIS</div>
                  <span className="text-xs text-gray-600">QR Code Number</span>
                </div>
                <div className="text-red-500 font-bold text-sm">GPN</div>
              </div>

              <div className="text-center mb-3">
                <div className="font-bold text-lg">GAME JB</div>
                <div className="text-xs text-gray-600">NMID : ID2023270994852</div>
                <div className="text-xs text-gray-600 mt-1">A01</div>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-black w-32 h-32 mx-auto mb-3 flex items-center justify-center">
                <div className="grid grid-cols-8 gap-px">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`} />
                  ))}
                </div>
              </div>

              <div className="text-center text-xs text-gray-600 mb-2">SATU QRIS UNTUK SEMUA</div>
              <div className="text-center text-xs text-gray-600 mb-3">Cek transaksi di www.qris.id</div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600">Dicatat oleh : 93608503</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-xs text-gray-600 text-left">Versi Cetak : 2023.07.4</div>
            </div>
          </div>

          <p className="text-slate-300 text-sm text-center">Scan kode QR di atas dengan aplikasi pembayaran Anda</p>

          {/* Payment Method Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full bg-slate-600 border-slate-500 text-cyan-400 hover:bg-slate-500 justify-start gap-3 h-12"
            >
              <Play className="w-4 h-4 fill-current" />
              E-WALLET
            </Button>

            <Button
              variant="outline"
              className="w-full bg-slate-600 border-slate-500 text-cyan-400 hover:bg-slate-500 justify-start gap-3 h-12"
            >
              <Play className="w-4 h-4 fill-current" />
              TRANSFER BANK
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium">WhatsApp</Button>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium">Web Utama</Button>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium">Telegram</Button>
          </div>

          <div className="flex justify-center">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-8">Testimoni</Button>
          </div>

          <div className="flex justify-center">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-12">Back</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
