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

/* modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-component-menu.html.twig */
class __TwigTemplate_678bee9db303b0e06797c1c9d103b392 extends \Twig\Template
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
        $context["all_types"] = twig_array_merge($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "layout", [], "any", false, false, true, 1), 1, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "content", [], "any", false, false, true, 1), 1, $this->source));
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["status_messages"] ?? null), 2, $this->source), "html", null, true);
        echo "
<div";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 3, $this->source), "html", null, true);
        echo ">
  <h4 class=\"visually-hidden\">";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Add Item"));
        echo "</h4>
  ";
        // line 5
        if ((twig_length_filter($this->env, ($context["all_types"] ?? null)) > 1)) {
            // line 6
            echo "  <div class=\"lpb-component-list__search\">
    <input class=\"lpb-component-list-search-input\" type=\"text\" placeholder=\"Filter items...\" />
  </div>
  <div class=\"lpb-component-list__group\">
    ";
            // line 10
            if (twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "layout", [], "any", false, false, true, 10)) {
                // line 11
                echo "    <div class=\"lpb-component-list__group--layout\">
    ";
            }
            // line 13
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "layout", [], "any", false, false, true, 13));
            foreach ($context['_seq'] as $context["_key"] => $context["type"]) {
                // line 14
                echo "      <div class=\"lpb-component-list__item type-";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["type"], "id", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
                echo " is-layout\">
        <a";
                // line 15
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["type"], "link_attributes", [], "any", false, false, true, 15), "setAttribute", [0 => "href", 1 => twig_get_attribute($this->env, $this->source, $context["type"], "url", [], "any", false, false, true, 15)], "method", false, false, true, 15), 15, $this->source), "html", null, true);
                echo ">";
                if (twig_get_attribute($this->env, $this->source, $context["type"], "image", [], "any", false, false, true, 15)) {
                    echo "<img src=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["type"], "image", [], "any", false, false, true, 15), 15, $this->source), "html", null, true);
                    echo "\" alt =\"\" />";
                }
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["type"], "label", [], "any", false, false, true, 15), 15, $this->source), "html", null, true);
                echo "</a>
      </div>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['type'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 18
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "layout", [], "any", false, false, true, 18)) {
                // line 19
                echo "    </div>
    ";
            }
            // line 21
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "content", [], "any", false, false, true, 21)) {
                // line 22
                echo "    <div class=\"lpb-component-list__group--content\">
    ";
            }
            // line 24
            echo "    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "content", [], "any", false, false, true, 24));
            foreach ($context['_seq'] as $context["_key"] => $context["type"]) {
                // line 25
                echo "      <div class=\"lpb-component-list__item type-";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["type"], "id", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
                echo "\">
        <a";
                // line 26
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["type"], "link_attributes", [], "any", false, false, true, 26), "setAttribute", [0 => "href", 1 => twig_get_attribute($this->env, $this->source, $context["type"], "url", [], "any", false, false, true, 26)], "method", false, false, true, 26), 26, $this->source), "html", null, true);
                echo ">";
                if (twig_get_attribute($this->env, $this->source, $context["type"], "image", [], "any", false, false, true, 26)) {
                    echo "<img src=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["type"], "image", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
                    echo "\" alt =\"\" />";
                }
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["type"], "label", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
                echo "</a>
      </div>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['type'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 29
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["types"] ?? null), "content", [], "any", false, false, true, 29)) {
                // line 30
                echo "    </div>
    ";
            }
            // line 32
            echo "  </div>
  ";
        } else {
            // line 34
            echo "  <div class=\"lpb-component-list__empty-message\">
  ";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["empty_message"] ?? null), 35, $this->source), "html", null, true);
            echo "
  </div>
  ";
        }
        // line 38
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-component-menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  153 => 38,  147 => 35,  144 => 34,  140 => 32,  136 => 30,  133 => 29,  117 => 26,  112 => 25,  107 => 24,  103 => 22,  100 => 21,  96 => 19,  93 => 18,  77 => 15,  72 => 14,  67 => 13,  63 => 11,  61 => 10,  55 => 6,  53 => 5,  49 => 4,  45 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% set all_types = types.layout|merge(types.content) %}
{{ status_messages }}
<div{{ attributes }}>
  <h4 class=\"visually-hidden\">{{ 'Add Item'|t }}</h4>
  {% if all_types|length > 1 %}
  <div class=\"lpb-component-list__search\">
    <input class=\"lpb-component-list-search-input\" type=\"text\" placeholder=\"Filter items...\" />
  </div>
  <div class=\"lpb-component-list__group\">
    {% if types.layout %}
    <div class=\"lpb-component-list__group--layout\">
    {% endif %}
    {% for type in types.layout %}
      <div class=\"lpb-component-list__item type-{{type.id}} is-layout\">
        <a{{ type.link_attributes.setAttribute('href', type.url) }}>{% if type.image %}<img src=\"{{ type.image }}\" alt =\"\" />{% endif %}{{ type.label }}</a>
      </div>
    {% endfor %}
    {% if types.layout %}
    </div>
    {% endif %}
    {% if types.content %}
    <div class=\"lpb-component-list__group--content\">
    {% endif %}
    {% for type in types.content %}
      <div class=\"lpb-component-list__item type-{{type.id}}\">
        <a{{ type.link_attributes.setAttribute('href', type.url) }}>{% if type.image %}<img src=\"{{ type.image }}\" alt =\"\" />{% endif %}{{ type.label }}</a>
      </div>
    {% endfor %}
    {% if types.content %}
    </div>
    {% endif %}
  </div>
  {% else %}
  <div class=\"lpb-component-list__empty-message\">
  {{ empty_message }}
  </div>
  {% endif %}
</div>
", "modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-component-menu.html.twig", "/app/public_html/modules/contrib/layout_paragraphs/templates/layout-paragraphs-builder-component-menu.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1, "if" => 5, "for" => 13);
        static $filters = array("merge" => 1, "escape" => 2, "t" => 4, "length" => 5);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['merge', 'escape', 't', 'length'],
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
