import SkillsTree from "@/src/ReactFlow/SkillsTree"
import PageTitle from "@/src/_components/PageTitle"
export default function Skills() {
    return (
        <div className="">
            <div className="mb-6 md:mb-10">
                <PageTitle title="My Technical Skills"/>
            </div>
            <SkillsTree />
        </div>
    )
}