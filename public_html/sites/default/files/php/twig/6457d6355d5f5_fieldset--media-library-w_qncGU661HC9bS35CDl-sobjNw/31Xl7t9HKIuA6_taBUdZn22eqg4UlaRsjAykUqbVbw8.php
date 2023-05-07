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

/* modules/contrib/media_library_theme_reset/templates/fieldset--media-library-widget.html.twig */
class __TwigTemplate_bc320f567ffe92785fc76058cd9a4658 extends \Twig\Template
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
        // line 25
        $context["classes"] = [0 => "js-form-item", 1 => "form-item", 2 => "js-form-wrapper", 3 => "form-wrapper", 4 => "media-library-widget"];
        // line 33
        echo "<fieldset";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 33), 33, $this->source), "html", null, true);
        echo ">
  ";
        // line 35
        $context["legend_span_classes"] = [0 => "fieldset-legend", 1 => "form-item__label", 2 => ((        // line 38
($context["required"] ?? null)) ? ("js-form-required") : ("")), 3 => ((        // line 39
($context["required"] ?? null)) ? ("form-required") : (""))];
        // line 42
        echo "  ";
        // line 43
        echo "  <legend";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["legend"] ?? null), "attributes", [], "any", false, false, true, 43), 43, $this->source), "html", null, true);
        echo ">
    <span";
        // line 44
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["legend_span"] ?? null), "attributes", [], "any", false, false, true, 44), "addClass", [0 => ($context["legend_span_classes"] ?? null)], "method", false, false, true, 44), 44, $this->source), "html", null, true);
        echo ">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["legend"] ?? null), "title", [], "any", false, false, true, 44), 44, $this->source), "html", null, true);
        echo "</span>
  </legend>
  <div class=\"fieldset-wrapper\">
    ";
        // line 47
        if (($context["errors"] ?? null)) {
            // line 48
            echo "      <div class=\"form-item--error-message\">
        <strong>";
            // line 49
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 49, $this->source), "html", null, true);
            echo "</strong>
      </div>
    ";
        }
        // line 52
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, ($context["prefix"] ?? null), "empty_selection", [], "any", false, false, true, 52)) {
            // line 53
            echo "      <p class=\"media-library-widget-empty-text\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["prefix"] ?? null), "empty_selection", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
            echo "</p>
    ";
        } elseif (twig_get_attribute($this->env, $this->source,         // line 54
($context["prefix"] ?? null), "weight_toggle", [], "any", false, false, true, 54)) {
            // line 55
            echo "      ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["prefix"] ?? null), "weight_toggle", [], "any", false, false, true, 55), 55, $this->source), "html", null, true);
            echo "
    ";
        }
        // line 57
        echo "    ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 57, $this->source), "html", null, true);
        echo "
    ";
        // line 58
        if (($context["suffix"] ?? null)) {
            // line 59
            echo "      <span class=\"field-suffix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 59, $this->source), "html", null, true);
            echo "</span>
    ";
        }
        // line 61
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 61)) {
            // line 62
            echo "      <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "attributes", [], "any", false, false, true, 62), "addClass", [0 => "description"], "method", false, false, true, 62), 62, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["description"] ?? null), "content", [], "any", false, false, true, 62), 62, $this->source), "html", null, true);
            echo "</div>
    ";
        }
        // line 64
        echo "  </div>
</fieldset>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/media_library_theme_reset/templates/fieldset--media-library-widget.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 64,  108 => 62,  105 => 61,  99 => 59,  97 => 58,  92 => 57,  86 => 55,  84 => 54,  79 => 53,  76 => 52,  70 => 49,  67 => 48,  65 => 47,  57 => 44,  52 => 43,  50 => 42,  48 => 39,  47 => 38,  46 => 35,  41 => 33,  39 => 25,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/media_library_theme_reset/templates/fieldset--media-library-widget.html.twig", "/app/public_html/modules/contrib/media_library_theme_reset/templates/fieldset--media-library-widget.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 25, "if" => 47);
        static $filters = array("escape" => 33);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape'],
                []
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
