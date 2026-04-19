import React from 'react'
import styles from './FilterTabs.module.css'

const FilterTabs = ({ filter, setFilter, counts }) => {
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ]

  return (
    <div className={styles.wrapper}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className={styles.sectionTitle}>My Tasks</span>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`${styles.tab} ${filter === tab.key ? styles.active : ''}`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
              <span className={styles.count}>{counts[tab.key]}</span>
            </button>
          ))}
        </div>
      </div>
      <span className={styles.viewAll}>View All ›</span>
    </div>
  )
}

export default FilterTabs