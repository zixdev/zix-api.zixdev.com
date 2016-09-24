<?php namespace Zix\Core\Libraries\Sites\Traits;

use Illuminate\Support\Facades\Storage;

trait HasMultiSitesTrait
{
    public function getTheme()
    {

        return $this->name;
    }

    public function getThemeScripts($name, $build = null, $type = null)
    {
        $version = site()->versions()->enabled()->latest()->first()->version;

        $file = 'scripts/' . $this->ui . '/' . $version . '/' .$name;

        if($build) {
            $file .= '.' . $build;
        }

        if($type) {
            $file .= '.' . $type;
        }

        $file .= '.js';

        return Storage::get($file);
    }

    public function scripts()
    {
        return json_decode(site()->versions()->enabled()->latest()->first()->scripts);
    }

}