'use server'
import { Skill } from "../_types/types";
import { supabase } from "../utils/supabase/server";
import { cacheLife, cacheTag } from "next/cache";

async function fetchSkillsTreeFromDB () {
    const [
        {data: rowSkills , error: skillsError},
        {data: edges, error: edgesError}
    ] = await Promise.all([
        supabase.from('skills').select('id, label, is_locked, icon'),
        supabase.from('skills_edges').select('from_node_id, to_node_id')
    ]);

    if (skillsError) {
        throw new Error("Error when fetching skills tree form database " + skillsError?.message)
    }
    if (edgesError) {
        throw new Error("Error when fetching skills tree form database " + edgesError?.message)
    }
    const skills: Skill[] = rowSkills.map((skill) => {
        return {
            id: skill.id,
            label: skill.label,
            isLocked: skill.is_locked,
            icon: skill.icon
        } 
    })
    return {skills, edges};
}

export const getCachedTree = async () => {
    'use cache'
    cacheLife('days');
    cacheTag('skills-tag');
    return await fetchSkillsTreeFromDB()
}