import TradingViewWidget from "@/app/charts/components/tradingview"

export default function IndexPage() {
    return (
      <div className="App">
        <div className="overflow-hidden rounded-lg container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      
          <TradingViewWidget />
          </div>
      </div>
          
)
    }