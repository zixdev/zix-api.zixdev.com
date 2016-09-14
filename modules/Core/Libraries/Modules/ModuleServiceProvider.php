<?php namespace Zix\Core\Libraries\Modules;

use Illuminate\Support\ServiceProvider;
use Zix\Core\Libraries\Modules\Contracts\PackagerInterface;
use Zix\Core\Libraries\Modules\Helpers\Packager;

/**
 * Class ModuleServiceProvider
 * @package modules\Core\Libraries\Modules
 */
class ModuleServiceProvider extends ServiceProvider
{


    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton('modules', function($app) {
            return new Module($app['files']);
        });



        $this->registerModulesProviders();
        $this->bindContracts();

    }

    /**
     * Register All Enabled Modules Providers.
     */
    public function registerModulesProviders()
    {
        $this->app['modules']->all()->map(function($package) {
            if($package->enabled()) {
                $this->registerProviders($package->providers());
            }
        });
    }

    /**
     * Bind Modules Contracts
     */
    public function bindContracts()
    {
        $this->app->bind(PackagerInterFace::class, Packager::class);
    }

    /**
     * Register App Providers
     * @param array $providers
     */
    public function registerProviders(array $providers)
    {
        foreach($providers as $provider) {
            $this->app->register($provider);
        }
    }
}