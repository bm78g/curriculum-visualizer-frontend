function getNode(id, nodes) {
    return nodes.find(n => n.id === id)
}

export default function getPathTo(id, nodes) {
    if (nodes === undefined)
        return

    const courseObj = getNode(id, nodes)
    let coursePath = []
    
    pushRequirements(courseObj, coursePath, nodes)  // Returns an array of array of requirement courses from each pre-requisite courses.
    coursePath = coursePath.flat()                  // Array.flat() to get a flat list of all requirements.

    return coursePath
}

function pushRequirements(node, coursePath, nodes) {
    if (node.requirement === undefined)
        return
    if (Object.entries(node.requirement).length == 0)
        return

    const plans = node.requirement.plans
    const reqCourses = plans.map(plan => plan.courses).flat()
    coursePath.push(reqCourses)

    for (const courseId of reqCourses) {
        pushRequirements(getNode(courseId, nodes), coursePath, nodes)
    }
}