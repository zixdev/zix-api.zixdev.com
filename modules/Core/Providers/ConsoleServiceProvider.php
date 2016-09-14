<?php

namespace Zix\Core\Providers;

use Illuminate\Support\ServiceProvider;
use Zix\Core\Console\Commands\Admin\CreateAdminCommand;
use Zix\Core\Console\Commands\Admin\CreateAdminFullAccessRoleCommand;
use Zix\Core\Console\Commands\InstallCommand;
use Zix\Core\Console\Commands\MakeController;
use Zix\Core\Console\Commands\MakeEvent;
use Zix\Core\Console\Commands\MakeJob;
use Zix\Core\Console\Commands\MakeListener;
use Zix\Core\Console\Commands\MakeMail;
use Zix\Core\Console\Commands\MakeMiddleware;
use Zix\Core\Console\Commands\MakeMigration;
use Zix\Core\Console\Commands\MakeModel;
use Zix\Core\Console\Commands\MakeModule;
use Zix\Core\Console\Commands\MakeCommand;
use Zix\Core\Console\Commands\MakeNotification;
use Zix\Core\Console\Commands\MakePolicy;
use Zix\Core\Console\Commands\MakeProvider;
use Zix\Core\Console\Commands\MakeRequest;
use Zix\Core\Console\Commands\MakeSeeder;
use Zix\Core\Console\Commands\MakeTest;
use Zix\Core\Console\Commands\MigrateCommand;
use Zix\Core\Console\Commands\MigrateResetCommand;
use Zix\Core\Console\Commands\MigrateRollbackCommand;

/**
 * Class ConsoleServiceProvider
 * @package Zix\Core\Providers
 */
class ConsoleServiceProvider extends ServiceProvider
{
    /**
     * The available command shortname.
     *
     * @var array
     */
    protected $commands = [
        MakeModule::class,
        MakeCommand::class,
        MakeController::class,
        MakeProvider::class,
        MakeEvent::class,
        MakeJob::class,
        MakeListener::class,
        MakeMail::class,
        MakeMiddleware::class,
        MakeMigration::class,
        MakeModel::class,
        MakeNotification::class,
        MakePolicy::class,
        MakeRequest::class,
        MakeSeeder::class,
        MakeTest::class,
        MigrateCommand::class,
        MigrateRollbackCommand::class,
        MigrateResetCommand::class,
        InstallCommand::class,

        // App Create commands
        CreateAdminCommand::class,
        CreateAdminFullAccessRoleCommand::class
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->commands($this->commands);

    }
}
