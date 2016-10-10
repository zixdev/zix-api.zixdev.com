<?php

namespace Zix\Core\Http\Controllers\Site;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use ZipArchive;
use Zix\Core\Entities\Site;
use Zix\Core\Support\Traits\ApiResponses;
use Illuminate\Support\Facades\Storage;

class SiteVersionController
{
    use ApiResponses;
    /**
     * @var Site
     */
    private $site;

    /**
     * SiteController constructor.
     * @param Site $site
     */
    public function __construct(Site $site)
    {
        $this->site = $site;
    }

    /**
     * Get Site Versions.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return $this->respondWithData($this->site->findOrFail($id)->versions);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        if($request->hasFile('media')) {
            // get version $version = '1.0.4';
            $version = '1.0.4';
            // validate it's a zip file
            // store the zip file

            // extract the zip file
            $zip = new ZipArchive;
            $zip->open($request->file('media'));
            $zip->extractTo(storage_path('tmp/ui/tmp'));
            // create the site ui
            return \Site::get($id)->addSiteUiScripts(storage_path('tmp/ui/tmp/public'), $version);


            // store it to db


            // activate it.
            return $this->respondDataCreated('New UI');
        }
        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}