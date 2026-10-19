import React from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import * as SimpleIcons from 'react-icons/si';
export interface SkillNodeData extends Record<string, unknown> {
  label: string;
  icon?: string;
  isLocked?: boolean;
}

export type SkillCustomNode = Node<SkillNodeData, 'skillNode'>;
export const SkillNode: React.FC<NodeProps<SkillCustomNode>> = ({ data }) => {
  const { label, icon, isLocked = false} = data;
  const IconComponent = icon ? (SimpleIcons as any)[icon] : null;
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center rounded-full border-2 transition-all duration-300 ${
        isLocked
          ? 'border-emerald-950 bg-black/80 text-emerald-900 shadow-none opacity-60'
          : 'border-[#00ff66] bg-[#031209] text-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.4),inset_0_0_10px_rgba(0,255,102,0.3)] hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,102,0.8),inset_0_0_15px_rgba(0,255,102,0.5)]'
      }`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!h-2.5 !w-2.5 !border-none !bg-[#00ff66]"
      />
      <div className="flex max-w-[86%] flex-col items-center justify-center p-1 text-center font-extrabold">
        {isLocked ? (
          <span className="text-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M7 10V8a5 5 0 0 1 10 0v2h.5A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10H7Zm2 0h6V8a3 3 0 1 0-6 0v2Z" />
            </svg>
          </span>
        ) : (
          <>
            {IconComponent ? <IconComponent size={40} className="text-green-500 mb-2.5" /> : null}
            <span className="text-[clamp(0.75rem,1.5vw,1rem)] font-semibold leading-tight break-words drop-shadow-[0_0_5px_#00ff66]">
              {label}
            </span>
          </>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!h-2.5 !w-2.5 !border-none !bg-[#00ff66]"
      />
    </div>
  );
};