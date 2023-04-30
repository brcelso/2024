"use client"

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
                "Brazil",
                "EWZ|All"
            ],
            [
                "Dow Jones",
                "DJI|All"
            ],
            [
                "S&P500",
                "SP500|All"
            ],
            [
                "Gold",
                "GOLD|All"
            ],
            [
                "Bitcoin",
                "BTCUSD|All|"
            ],
            [
                "Ethereum",
                "ETHUSD|All|"
            ],
            [
                "Apple",
                "AAPL|All"
            ],
            [
                "Microsoft",
                "MSFT|All"
              ],
              [
                "Google",
                "GOOGL|All"
              ],
              [
                "Meta",
                "META|All"
              ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": 500,
          "locale": "en",
          "colorTheme": "",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "percent-only",
          "chartType": "candlesticks",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineType": 0,
          "upColor": "rgba(255, 255, 255, 1)",
          "downColor": "rgba(0, 0, 0, 1)",
          "borderUpColor": "rgba(0, 0, 0, 1)",
          "borderDownColor": "rgba(0, 0, 0, 1)",
          "wickUpColor": "rgba(0, 0, 0, 1)",
          "wickDownColor": "rgba(0, 0, 0, 1)"
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={contariner}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);