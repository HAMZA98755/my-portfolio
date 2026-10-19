import SkillsTree from "@/src/ReactFlow/SkillsTree"
import PageTitle from "@/src/_components/PageTitle"
export default function Skills() {
    return (
        <div className="container py-8 md:py-12">
            <div className="mb-6 md:mb-10">
                <PageTitle title="My Technical Skills"/>
            </div>
            <SkillsTree />
        </div>
    )
}