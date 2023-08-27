import { getProjects } from '@/sanity/sanity-utils';
import { Project } from '@/types/Project';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <div className='h-screen flex flex-col justify-center lg:max-w-5xl max-w-max'>
        <h1 className='text-4xl lg:text-6xl font-semibold text-slate-50 leading-snug'>
          Transforming ideas into impactful experiences through thoughtful
          design solutions.
        </h1>
        <p className='mt-7 text-lg lg:text-xl text-gray-400 leading-normal'>
          With expertise in both front-end development and user-centric design,
          I create captivating digital experiences that not only look visually
          stunning but also deliver exceptional performance and usability.
        </p>
      </div>
      <h2 className='mt-24 font-bold text-slate-50 text-3xl'>My Projects</h2>
      <div className='mt-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8'>
        {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={600}
                height={300}
                className='object-cover rounded-lg '
              />
            )}
            <div className='font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
