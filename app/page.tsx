import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm an experienced Software Engineer with a proven track record in 
        designing and developing cutting-edge enterprise applications, 
        proficient in Java.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
