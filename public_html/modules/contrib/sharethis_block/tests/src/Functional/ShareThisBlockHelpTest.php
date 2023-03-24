<?php

namespace Drupal\Tests\sharethis_block\Functional;

use Behat\Mink\Exception\ExpectationException;
use Drupal\Core\Entity\EntityStorageException;
use Drupal\Tests\BrowserTestBase;

/**
 * Class ShareThisBlockHelpTest
 *
 * @package Drupal\Tests\sharethis_block\Functional
 *
 * @group sharethis_block
 */
class ShareThisBlockHelpTest extends BrowserTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = ['sharethis_block', 'help'];

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
    'access administration pages',
    'view the administration theme',
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
   * Tests that a user with the correct permissions can access the help page.
   *
   * @throws ExpectationException
   */
  public function testAccessHelpPage() {
    $this->drupalGet('/admin/help/sharethis_block');
    $this->assertSession()->statusCodeEquals(200);
  }

  /**
   * Tests that the help page contains the markdown text.
   *
   * @throws ExpectationException
   */
  public function testHelpPageContent() {
    $this->drupalGet('/admin/help/sharethis_block');
    $this->assertSession()->pageTextContains('Install the module as usual');
  }

}
