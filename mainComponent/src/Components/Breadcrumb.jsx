export default function Breadcrumb() {
    let obj = {
        title: "Main Component",
        child: {
            title: "second Component",
            child: {
                title: "Third Component",
                child: {
                    title: "inner most title"
                }
            }
        }
    }

    function renderbreadcrumb(node) {
        if(!node) return
        return <span> {`>`} {node.title} {renderbreadcrumb(node.child)}</span>
    }
    return <div>
        {obj.title} {renderbreadcrumb(obj.child)}

    </div>

}