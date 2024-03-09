import { NavLink } from "react-router-dom"

const Card = ({ post }) => {
    return (
        <div key={post?.id} className='flex flex-col gap-y-2'>
            <div className='text-[14px] flex flex-col leading-[25 px] gap-y-1'>
                <NavLink to={`/blog/${post?.id}`}>
                    <h2 className='font-bold text-lg cursor-pointer hover:underline transition-all duration-200'>{post?.title}</h2>
                </NavLink>
                <p>By <span className='italic '>{post?.author}</span> on <NavLink to={`/categories/${post?.category.replace(" ","-")}`}>
                        <span className='underline font-bold cursor-pointer hover:underline transition-all duration-200'>{post?.category}</span>
                    </NavLink>
                </p>
                <p>Posted On {post?.date}</p>
            </div>
            <p>{post?.content}</p>
            <div>
                <div className='flex gap-x-2 text-xs'>

                    {post?.tags.map((tag, index) => {
                        return <NavLink to={`/tags/${tag.replace(" ","-")}`} key={index}>
                            <span className='text-blue-600 underline font-bold' key={index}>#{tag}</span>
                        </NavLink>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Card
