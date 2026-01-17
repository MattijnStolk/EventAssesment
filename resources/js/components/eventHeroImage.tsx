type EventHeroImageProps = {
    hero_image_url: string;
    title: string;
};

export default function EventHeroImage({ hero_image_url, title }: EventHeroImageProps) {
    return (
        <div className="relative h-96 w-full overflow-hidden">
            <img
                src={hero_image_url}
                alt={title}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
}
