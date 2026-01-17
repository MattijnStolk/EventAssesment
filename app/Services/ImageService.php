<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class ImageService
{
    protected int $maxWidth = 1920;
    protected int $maxHeight = 1080;
    protected int $quality = 85;

    public function storeFromUrl(string $url, string $directory = 'images', ?string $filename = null): string
    {
        $image = Image::read(file_get_contents($url));

        if ($image->width() > $this->maxWidth) {
            $image->scaleDown(width: $this->maxWidth);
        }
        if ($image->height() > $this->maxHeight) {
            $image->scaleDown(height: $this->maxHeight);
        }

        $extension = $this->getExtensionFromUrl($url);
        $filename = ($filename ?? uniqid()) . ".{$extension}";
        $path = "{$directory}/{$filename}";

        Storage::disk('public')->put($path, (string) $image->encodeByExtension($extension, $this->quality));

        return $path;
    }

    private function getExtensionFromUrl(string $url): string
    {
        $path = parse_url($url, PHP_URL_PATH);
        $ext = strtolower(pathinfo($path ?? '', PATHINFO_EXTENSION));

        return in_array($ext, ['jpg', 'jpeg', 'png', 'gif', 'webp']) ? $ext : 'jpg';
    }
}
