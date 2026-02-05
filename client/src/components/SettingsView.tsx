import { useApp } from '@/contexts/AppContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/**
 * SettingsView Component
 * 
 * Design: Apple Settings style
 * - Grouped list items
 * - Toggle switches
 * - Destructive actions
 */
export default function SettingsView() {
  const { collectedGems, totalPoints, resetProgress } = useApp();

  const handleResetProgress = () => {
    if (window.confirm('本当に進捗をリセットしますか？収集した宝石とポイントがすべて失われます。')) {
      resetProgress();
      toast.success('進捗をリセットしました');
    }
  };

  return (
    <div className="h-full overflow-auto bg-secondary">
      {/* Header */}
      <div className="sticky top-0 z-10 nav-bar px-4 py-4 safe-area-top">
        <h1 className="text-xl font-semibold">設定</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 mb-2">
            統計
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden">
            <div className="divide-y divide-border">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-foreground">収集した宝石</span>
                <span className="text-muted-foreground">{collectedGems.length} 個</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-foreground">合計ポイント</span>
                <span className="text-primary font-semibold">{totalPoints} pt</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* App Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 mb-2">
            アプリ情報
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden">
            <div className="divide-y divide-border">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-foreground">バージョン</span>
                <span className="text-muted-foreground">1.0.0</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-foreground">施設名</span>
                <span className="text-muted-foreground">ストーンパーク</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Help Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 mb-2">
            ヘルプ
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden">
            <div className="divide-y divide-border">
              <button
                className="w-full flex items-center justify-between px-4 py-3 tap-feedback"
                onClick={() => toast.info('遊び方ガイドは準備中です')}
              >
                <span className="text-foreground">遊び方</span>
                <svg
                  className="w-5 h-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                className="w-full flex items-center justify-between px-4 py-3 tap-feedback"
                onClick={() => toast.info('よくある質問は準備中です')}
              >
                <span className="text-foreground">よくある質問</span>
                <svg
                  className="w-5 h-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button
                className="w-full flex items-center justify-between px-4 py-3 tap-feedback"
                onClick={() => toast.info('お問い合わせは準備中です')}
              >
                <span className="text-foreground">お問い合わせ</span>
                <svg
                  className="w-5 h-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Danger Zone */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 mb-2">
            データ管理
          </h2>
          <div className="bg-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-4 py-3 tap-feedback"
              onClick={handleResetProgress}
            >
              <span className="text-destructive">進捗をリセット</span>
              <svg
                className="w-5 h-5 text-destructive"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs text-muted-foreground px-4 mt-2">
            リセットすると、収集した宝石とポイントがすべて失われます。この操作は取り消せません。
          </p>
        </motion.section>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground">
            © 2026 ストーンパーク
          </p>
        </div>
      </div>
    </div>
  );
}
