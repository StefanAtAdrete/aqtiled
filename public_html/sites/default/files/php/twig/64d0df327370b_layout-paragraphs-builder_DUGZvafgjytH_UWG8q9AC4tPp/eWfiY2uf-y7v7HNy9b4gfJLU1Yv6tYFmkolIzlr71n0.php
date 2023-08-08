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

/* modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder.html.twig */
class __TwigTemplate_d4f24320db9baca40ce2a1e867023b32 extends \Twig\Template
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
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 1, $this->source), "html", null, true);
        echo ">
  ";
        // line 2
        if (($context["is_empty"] ?? null)) {
            // line 3
            echo "    <div class=\"lpb-empty-container__wrapper\">
      <div class=\"lpb-empty-container\">
        <div class=\"lpb-empty-message\">";
            // line 5
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["empty_message"] ?? null), 5, $this->source), "html", null, true);
            echo "</div>
        ";
            // line 6
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["insert_button"] ?? null), 6, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  ";
        } else {
            // line 10
            echo "    ";
            if (($context["translation_warning"] ?? null)) {
                // line 11
                echo "    <div class=\"messages messages--status\">
      ";
                // line 12
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["translation_warning"] ?? null), 12, $this->source), "html", null, true);
                echo "
    </div>
    ";
            }
            // line 15
            echo "    <div class=\"js-lpb-component-list\">
      ";
            // line 16
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["root_components"] ?? null), 16, $this->source), "html", null, true);
            echo "
    </div>
  ";
        }
        // line 19
        echo "</div>";
    }

    public function getTemplateName()
    {
        return "modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  82 => 19,  76 => 16,  73 => 15,  67 => 12,  64 => 11,  61 => 10,  54 => 6,  50 => 5,  46 => 3,  44 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div{{ attributes }}>
  {% if is_empty  %}
    <div class=\"lpb-empty-container__wrapper\">
      <div class=\"lpb-empty-container\">
        <div class=\"lpb-empty-message\">{{ empty_message }}</div>
        {{ insert_button }}
      </div>
    </div>
  {% else %}
    {% if translation_warning %}
    <div class=\"messages messages--status\">
      {{ translation_warning }}
    </div>
    {% endif %}
    <div class=\"js-lpb-component-list\">
      {{ root_components }}
    </div>
  {% endif %}
</div>", "modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder.html.twig", "/app/public_html/modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 2);
        static $filters = array("escape" => 1);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
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
