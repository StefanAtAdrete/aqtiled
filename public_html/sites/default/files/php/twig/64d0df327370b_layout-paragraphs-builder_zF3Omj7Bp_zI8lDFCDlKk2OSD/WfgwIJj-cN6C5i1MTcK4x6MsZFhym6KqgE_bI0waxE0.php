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

/* modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-formatter.html.twig */
class __TwigTemplate_3c1d34d436572a33e7ea17f868ebe1ae extends \Twig\Template
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
        // line 1
        if (($context["is_empty"] ?? null)) {
            // line 2
            echo "<div class=\"lpb-enable__empty-message__wrapper\">
  <div class=\"lpb-enable__empty-message\">
    <p>
      You haven't created any ";
            // line 5
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_label"] ?? null), 5, $this->source), "html", null, true);
            echo " yet.
      <a class=\"lpb-enable-button use-ajax\" href=\"";
            // line 6
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link_url"] ?? null), 6, $this->source), "html", null, true);
            echo "\">";
            echo t("Start creating @field_label.", array("@field_label" => ($context["field_label"] ?? null), ));
            echo "</a>
    </p>
  </div>
</div>
";
        } else {
            // line 11
            echo "<div class=\"lpb-enable__wrapper\">
  <div class=\"lpb-enable\">
    <div class=\"lpb-enable__button\"><a class=\"lpb-enable-button use-ajax\" href=\"";
            // line 13
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link_url"] ?? null), 13, $this->source), "html", null, true);
            echo "\"><span>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["link_text"] ?? null), 13, $this->source), "html", null, true);
            echo "</span></a></div>
  </div>
</div>
";
            // line 16
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["root_components"] ?? null), 16, $this->source), "html", null, true);
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-formatter.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 16,  64 => 13,  60 => 11,  50 => 6,  46 => 5,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% if is_empty %}
<div class=\"lpb-enable__empty-message__wrapper\">
  <div class=\"lpb-enable__empty-message\">
    <p>
      You haven't created any {{ field_label }} yet.
      <a class=\"lpb-enable-button use-ajax\" href=\"{{link_url}}\">{% trans %}Start creating {{ field_label }}.{% endtrans %}</a>
    </p>
  </div>
</div>
{% else %}
<div class=\"lpb-enable__wrapper\">
  <div class=\"lpb-enable\">
    <div class=\"lpb-enable__button\"><a class=\"lpb-enable-button use-ajax\" href=\"{{link_url}}\"><span>{{link_text}}</span></a></div>
  </div>
</div>
{{ root_components }}
{% endif %}", "modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-formatter.html.twig", "/app/public_html/modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-formatter.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 1, "trans" => 6);
        static $filters = array("escape" => 5);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'trans'],
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
