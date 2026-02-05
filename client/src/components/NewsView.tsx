import { motion } from 'framer-motion';

/**
 * NewsView Component
 * 
 * Design: Apple HIG list style
 * - Clean card layout
 * - Event and coupon information
 * - Time-based badges
 */

interface NewsItem {
  id: string;
  type: 'event' | 'coupon' | 'info';
  title: string;
  description: string;
  date: string;
  isNew: boolean;
  image?: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    type: 'event',
    title: '春の宝石探しフェア開催中！',
    description: '期間限定で特別な宝石が園内に出現します。レアな宝石をゲットするチャンス！',
    date: '2026年2月1日〜2月28日',
    isNew: true,
  },
  {
    id: '2',
    type: 'coupon',
    title: 'ショップ10%OFFクーポン',
    description: '宝石を5つ以上収集すると、ミュージアムショップで使える10%OFFクーポンをプレゼント！',
    date: '有効期限: 2026年3月31日',
    isNew: true,
  },
  {
    id: '3',
    type: 'info',
    title: '新しい宝石が追加されました',
    description: 'トパーズとガーネットが新たにコレクションに追加されました。園内を探索して見つけてください。',
    date: '2026年1月15日',
    isNew: false,
  },
  {
    id: '4',
    type: 'event',
    title: '週末限定イベント',
    description: '毎週土日は獲得ポイント2倍！この機会にたくさんの宝石を収集しましょう。',
    date: '毎週土・日曜日',
    isNew: false,
  },
];

const TYPE_CONFIG = {
  event: {
    label: 'イベント',
    color: '#FF9500',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  coupon: {
    label: 'クーポン',
    color: '#34C759',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  info: {
    label: 'お知らせ',
    color: '#007AFF',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
};

export default function NewsView() {
  return (
    <div className="h-full overflow-auto bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 nav-bar px-4 py-4 safe-area-top">
        <h1 className="text-xl font-semibold">お知らせ</h1>
      </div>

      {/* News List */}
      <div className="p-4 space-y-3">
        {NEWS_ITEMS.map((item, index) => {
          const config = TYPE_CONFIG[item.type];

          return (
            <motion.div
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: `${config.color}15`,
                        color: config.color,
                      }}
                    >
                      {config.icon}
                      {config.label}
                    </span>
                    {item.isNew && (
                      <span className="text-xs px-2 py-0.5 bg-destructive text-destructive-foreground rounded-full font-medium">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center text-xs text-muted-foreground">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item.date}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
