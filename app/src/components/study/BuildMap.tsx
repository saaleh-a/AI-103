import { ArrowDown, ArrowRight, Check, Circle } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { useState } from 'react'
import type { BuildProject } from '@/data/projects'
import { useLearnerState } from '@/lib/learner-state'
import { useUIPrefs } from '@/lib/ui-prefs'

export function BuildMap({ project }: { project: BuildProject }) {
  const { state } = useLearnerState()
  const { prefs } = useUIPrefs()
  const [selected, setSelected] = useState(0)
  const milestone = project.milestones[selected] ?? project.milestones[0]
  return (
    <aside className="build-map" aria-label="How this build fits together">
      <div className="build-map-heading"><span>The system you are building</span><span>Local progress</span></div>
      <div className="build-map-nodes">
        {project.milestones.map((item, index) => {
          const explored = item.unitIds.filter((id) => state.study.units[id]?.completedAt).length
          return <div key={item.title}>
            {index > 0 && <ArrowDown size={16} className="build-map-arrow" aria-hidden />}
            <button type="button" className={selected === index ? 'build-node is-active' : 'build-node'} aria-pressed={selected === index} onClick={() => setSelected(index)}>
              {explored === item.unitIds.length ? <Check size={16} aria-hidden /> : <Circle size={15} aria-hidden />}
              <span>{item.title}</span><ArrowRight size={14} aria-hidden />
            </button>
          </div>
        })}
      </div>
      <motion.div key={milestone.title} className="build-map-explanation" initial={false} animate={{ opacity: 1 }} transition={{ duration: prefs.motion === 'off' ? 0 : 0.18 }}>
        <p>{milestone.purpose}</p>
        <span>Evidence to look for</span>
        <p>{milestone.evidence}</p>
      </motion.div>
      <p className="build-map-footnote">A checked connection means its lessons were explored, not that Azure has been verified.</p>
    </aside>
  )
}
