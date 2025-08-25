
export const instruments = {
  forex: [
    // Major and minor forex pairs will be dynamically loaded
    { symbol: 'EURUSD', name: 'Euro vs US Dollar', category: 'forex' },
    { symbol: 'GBPUSD', name: 'British Pound vs US Dollar', category: 'forex' },
    { symbol: 'USDJPY', name: 'US Dollar vs Japanese Yen', category: 'forex' },
    // ... more pairs
  ],
  metals: [
    { symbol: 'XAG/EUR', name: 'Silver vs Euro', category: 'metals' },
    { symbol: 'XAG/USD', name: 'Silver vs US Dollar', category: 'metals' },
    { symbol: 'XAU/EUR', name: 'Gold vs Euro', category: 'metals' },
    { symbol: 'XAU/USD', name: 'Gold vs US Dollar', category: 'metals' },
    { symbol: 'XPD/USD', name: 'Palladium vs US Dollar', category: 'metals' },
    { symbol: 'XPT/USD', name: 'Platinum vs US Dollar', category: 'metals' }
  ],
  indicesCash: [
    { symbol: 'AUS200.c', name: 'Australia 200 Cash', category: 'indices-cash' },
    { symbol: 'DE40.c', name: 'Germany 40 Cash', category: 'indices-cash' },
    { symbol: 'F40.c', name: 'France 40 Cash', category: 'indices-cash' },
    { symbol: 'HK50.c', name: 'Hong Kong 50 Cash', category: 'indices-cash' },
    { symbol: 'NE25.c', name: 'Netherlands 25 Cash', category: 'indices-cash' },
    { symbol: 'STOXX50.c', name: 'Euro Stoxx 50 Cash', category: 'indices-cash' },
    { symbol: 'UK100.c', name: 'UK 100 Cash', category: 'indices-cash' },
    { symbol: 'US500.c', name: 'US 500 Cash', category: 'indices-cash' },
    { symbol: 'USTEC.c', name: 'US Tech Cash', category: 'indices-cash' },
    { symbol: 'DJ30.c', name: 'Dow Jones 30 Cash', category: 'indices-cash' },
    { symbol: 'ES35.c', name: 'Spain 35 Cash', category: 'indices-cash' },
    { symbol: 'SWI20.c', name: 'Switzerland 20 Cash', category: 'indices-cash' }
  ],
  indicesFutures: [
    { symbol: 'DE40.U25', name: 'Germany 40 Sep 25', category: 'indices-futures' },
    { symbol: 'DJ30.U25', name: 'Dow Jones 30 Sep 25', category: 'indices-futures' },
    { symbol: 'DX.U25', name: 'Dollar Index Sep 25', category: 'indices-futures' },
    { symbol: 'JPN225.U25', name: 'Japan 225 Sep 25', category: 'indices-futures' },
    { symbol: 'NGAS.Q25', name: 'Natural Gas Aug 25', category: 'indices-futures' },
    { symbol: 'SILVER.U25', name: 'Silver Sep 25', category: 'indices-futures' },
    { symbol: 'TY10.U25', name: '10Y Treasury Sep 25', category: 'indices-futures' },
    { symbol: 'UKBRENT.U25', name: 'UK Brent Sep 25', category: 'indices-futures' },
    { symbol: 'US500.U25', name: 'US 500 Sep 25', category: 'indices-futures' },
    { symbol: 'USOIL.Q25', name: 'US Oil Aug 25', category: 'indices-futures' },
    { symbol: 'USTEC.U25', name: 'US Tech Sep 25', category: 'indices-futures' },
    { symbol: 'XAUUSD.Q25', name: 'Gold Aug 25', category: 'indices-futures' }
  ],
  energies: [
    { symbol: 'UKOIL.c', name: 'UK Oil Cash', category: 'energies' },
    { symbol: 'USOIL.c', name: 'US Oil Cash', category: 'energies' }
  ],
  crypto: [
    { symbol: 'BCHUSD', name: 'Bitcoin Cash vs USD', category: 'crypto' },
    { symbol: 'BTCEUR', name: 'Bitcoin vs Euro', category: 'crypto' },
    { symbol: 'BTCJPY', name: 'Bitcoin vs Japanese Yen', category: 'crypto' },
    { symbol: 'BTCUSD', name: 'Bitcoin vs US Dollar', category: 'crypto' },
    { symbol: 'SOLUSD', name: 'Solana vs US Dollar', category: 'crypto' },
    { symbol: 'ADAUSD', name: 'Cardano vs US Dollar', category: 'crypto' },
    { symbol: 'CHZUSD', name: 'Chiliz vs US Dollar', category: 'crypto' },
    { symbol: 'DOGUSD', name: 'Dogecoin vs US Dollar', category: 'crypto' },
    { symbol: 'ONEUSD', name: 'Harmony vs US Dollar', category: 'crypto' },
    { symbol: 'TRXUSD', name: 'Tron vs US Dollar', category: 'crypto' },
    { symbol: 'VETUSD', name: 'VeChain vs US Dollar', category: 'crypto' },
    { symbol: 'XEMUSD', name: 'NEM vs US Dollar', category: 'crypto' },
    { symbol: 'XLMUSD', name: 'Stellar vs US Dollar', category: 'crypto' },
    { symbol: 'ETHUSD', name: 'Ethereum vs US Dollar', category: 'crypto' }
  ],
  shares: {
    us: [
      { symbol: 'AAPL.OQ', name: 'Apple Inc.', category: 'shares-us' },
      { symbol: 'MSFT.OQ', name: 'Microsoft Corp.', category: 'shares-us' },
      { symbol: 'AMZN.OQ', name: 'Amazon.com Inc.', category: 'shares-us' },
      { symbol: 'TSLA.OQ', name: 'Tesla Inc.', category: 'shares-us' }
    ],
    eu: [
      { symbol: 'LVMH.PA', name: 'LVMH', category: 'shares-eu' },
      { symbol: 'SAPG.DE', name: 'SAP SE', category: 'shares-eu' },
      { symbol: 'BAYGn.DE', name: 'Bayer AG', category: 'shares-eu' },
      { symbol: 'AIR.PA', name: 'Airbus SE', category: 'shares-eu' }
    ],
    hk: [
      { symbol: '0700.HK', name: 'Tencent Holdings', category: 'shares-hk' },
      { symbol: '0939.HK', name: 'China Construction Bank', category: 'shares-hk' },
      { symbol: '2318.HK', name: 'Ping An Insurance', category: 'shares-hk' },
      { symbol: '0388.HK', name: 'Hong Kong Exchanges', category: 'shares-hk' }
    ]
  }
};