



export default function NextedComments(){
    const comments = [{
        name: "Akjil",
        comment: "hi, whats up",
        reply:[{
            name: "radhika",
            comment: "hello there!"
        }]
    },
    {
        name: "khwab",
        comment: "hello ji",
        reply:[{
            name: "radz",
            comment: "no, way",
            reply: [{
                name: "rohit",
                commnet: "IKR!!!"
            }]
        }]
    }]
    function renderComments(obj) {
       
        if(!Array.isArray(obj)){
            const {name, comment, reply} = obj;
            return <div className="comment">
            <p className="name">{name}</p>
            <p>{comment}</p>
            <div> {reply ? renderComments(reply) : []}</div>
        </div>
        } else {
            for(let obj2 of obj){
                return  <div>
                     {renderComments(obj2)}
                </div>
            }
        }
       
    
    }
    return <div>
        {comments.map((d) => {
            return renderComments(d)
        })}
    </div>


}