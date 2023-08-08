<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/bootstrap_styles/templates/shadow-preview.html.twig */
class __TwigTemplate_9b6f19085d45bebff4b279dfeb6a2d62 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 9
        echo "
";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("bootstrap_styles/plugins_groups.shadow.shadow_preview"), "html", null, true);
        echo "

<div data-bs-element=\"bs_preview-box\" data-bs-mode=\"light\" class=\"bs-shadow-preview\">
  <label class=\"bs-toggle-switch\">
    <input class=\"bs-toggle-switch--input\" type=\"checkbox\" data-theme-toggle>
    <span class=\"bs-toggle-switch--slider\"></span>
  </label>

  <div data-bs-element=\"bs_preview-element\">
    ";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Preview"));
        echo "
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/bootstrap_styles/templates/shadow-preview.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 19,  42 => 10,  39 => 9,);
    }

    public function getSourceContext()
    {
        return new Source("{#
 /**
  * @file
  * Default theme implementation of spacing preview box.
  *
  * @ingroup themeable
  */
#}

{{ attach_library('bootstrap_styles/plugins_groups.shadow.shadow_preview') }}

<div data-bs-element=\"bs_preview-box\" data-bs-mode=\"light\" class=\"bs-shadow-preview\">
  <label class=\"bs-toggle-switch\">
    <input class=\"bs-toggle-switch--input\" type=\"checkbox\" data-theme-toggle>
    <span class=\"bs-toggle-switch--slider\"></span>
  </label>

  <div data-bs-element=\"bs_preview-element\">
    {{ 'Preview'|t }}
  </div>
</div>
", "modules/contrib/bootstrap_styles/templates/shadow-preview.html.twig", "/app/public_html/modules/contrib/bootstrap_styles/templates/shadow-preview.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 10, "t" => 19);
        static $functions = array("attach_library" => 10);

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 't'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
