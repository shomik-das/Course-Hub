import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
    {
        name: 'Jonathan Yombo',
        role: 'Software Engineer',
        image: '/user.jpg',
        quote: 'Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.',
    },
    {
        name: 'Yves Kalume',
        role: 'GDE - Android',
        image: '/user.jpg',
        quote: 'Great work on tailfolio template. This is one of the best personal website that I have seen so far :)',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Tailkits Creator',
        image: '/user.jpg',
        quote: 'Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it. I can only recommend this incredible wonder.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Senior Software Engineer',
        image: '/user.jpg',
        quote: 'With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.',
    },
    {
        name: 'Oketa Fred',
        role: 'Fullstack Developer',
        image: '/user.jpg',
        quote: 'I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.',
    },

    {
        name: 'Khatab Wedaa',
        role: 'MerakiUI Creator',
        image: '/user.jpg',
        quote: "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
    },
    {
        name: 'Eric Ampire',
        role: 'UI/UX Design',
        image: '/user.jpg',
        quote: 'Tailus templates are the perfect solution for anyone who wants to create a beautiful and functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Software Engineer',
        image: '/user.jpg',
        quote: 'Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced! I highly recommend Tailus templates to anyone who is looking to create a website.',
    },
]

const chunkArray = (array, chunkSize) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-gray-500 block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-500 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
        </section>
    )
}