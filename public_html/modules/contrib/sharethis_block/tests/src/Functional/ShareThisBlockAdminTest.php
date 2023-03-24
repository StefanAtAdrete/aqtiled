<?php

namespace Drupal\Tests\sharethis_block\Functional;

use Behat\Mink\Exception\ExpectationException;
use Drupal\Core\Entity\EntityStorageException;
use Drupal\Tests\BrowserTestBase;

/**
 * Class SettingsPageTest
 *
 * @package Drupal\Tests\sharethis_block\Functional
 *
 * @group sharethis_block
 */
class ShareThisBlockAdminTest extends BrowserTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = ['sharethis_block'];

  /**
   * {@inheritdoc}
   */
  protected $profile = 'minimal';

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'stark';

  /**
   * Permissions for user that will be logged-in for test.
   *
   * @var array
   */
  protected static $userPermissions = [
    'access content',
    'administer sharethis_block',
  ];

  /**
   * {@inheritdoc}
   *
   * @throws EntityStorageException
   */
  protected function setUp() {
    parent::setUp();
    $account = $this->drupalCreateUser(static::$userPermissions);
    $this->drupalLogin($account);
  }

  /**
   * Tests that a user with the correct permissions can access the admin page.
   *
   * @throws ExpectationException
   */
  public function testAccessAdminPage() {
    $this->drupalGet('/admin/config/user-interface/sharethis');
    $this->assertSession()->statusCodeEquals(200);
  }

  /**
   * Tests that the form can be saved and changed values show.
   *
   * @throws ExpectationException
   */
  public function testSaveForm() {
    $this->drupalGet('/admin/config/user-interface/sharethis');
    $this->assertSession()->fieldValueEquals('property_id', '');
    $this->getSession()->getPage()->fillField('property_id', '5ece0df09d73fe001243be34');
    $this->getSession()->getPage()->selectFieldOption('inline', '1');
    $this->getSession()->getPage()->pressButton('Save configuration');
    $this->drupalGet('/admin/config/user-interface/sharethis');
    $this->assertSession()->fieldValueEquals('inline', '1');
    $this->assertSession()->fieldValueEquals('property_id', '5ece0df09d73fe001243be34');
  }

}
