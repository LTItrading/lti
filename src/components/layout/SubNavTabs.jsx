import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export function SubNavTabs({ 
  tabs, 
  defaultTab, 
  className,
  onTabChange,
  children 
}) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Tab Navigation */}
      <div className="border-b border-border mb-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                'relative whitespace-nowrap pb-4 px-1 text-sm font-medium transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 rounded-t-md',
                activeTab === tab.id
                  ? 'text-brand'
                  : 'text-muted-foreground hover:text-ink'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-brand"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {children ? (
          children(activeTab)
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tabs.find(tab => tab.id === activeTab)?.content}
          </motion.div>
        )}
      </div>
    </div>
  );
}