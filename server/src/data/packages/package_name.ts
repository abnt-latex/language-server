import standard_package from "./standard_package"
import related_software from "./related_software"
import tools from "./tools"
import graphicx_name from "./graphicx/name"

const package_name = [
    ...standard_package,
    ...related_software,
    ...tools,
    ...graphicx_name
]

export default package_name