type Image = {
    hero_image: string;
    title: string;
};

export default function EventHeroImage({ hero_image, title }: Image) {
    return (
        <div className="relative h-96 w-full overflow-hidden">
            <img
                src={hero_image}
                alt={title}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
}
